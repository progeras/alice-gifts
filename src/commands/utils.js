const _ = require('lodash');

// подключение команд, которые возвращают { matcher, handler }
module.exports.useCommand = (alice, command) => {
  if (command.intent) {
    command.handler = handlerBefore(command.handler, ctx => {
      if (ctx.message != 'ping' && ctx.message != '') {
        ctx.logMessage(`> ${ctx.message} (${command.intent})`);
      }
    });
  }
  alice.command(command.matcher, command.handler);
};

// подключение всех команд группы (плоский список). Вложенные группы не будут подключены
module.exports.useCommands = (alice, commands) => {
  Object.entries(commands).forEach(entry => {
    [commandName, command] = entry;
    if (command.disabled || !command.matcher) return;
    module.exports.useCommand(alice, command);
  });
};

// добавляет в начало функции код из второго параметра
const handlerBefore = (handler, before) => ctx => {
  before(ctx);
  return handler(ctx);
};

const getSelected = (ctx) => {
  return ctx.session.get('selected') || {};
}

const setSelected = (ctx, value) => {
  let selected = getSelected(ctx);
  if(typeof value === 'object'){
    selected = _.assign(selected, value);
  }
  ctx.session.set('selected', selected);
}

module.exports.getSelected = getSelected;
module.exports.setSelected = setSelected;