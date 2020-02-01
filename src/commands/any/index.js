const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

exports.handler = function (ctx) {
    return alice.Reply.text(`${_.sample([
            'Я вас не поняла.',
            'Ваш запрос не распознан.'])} ` +
        `Некоторые мои функции еще в разработке. Повторите запрос или спросите: Что ты умеешь ? \n `, {
        buttons: [alice.Markup.button('Что ты умеешь ?')]
    });
}