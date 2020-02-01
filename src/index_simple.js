const { Alice, Reply, Markup } = require('yandex-dialogs-sdk');
const alice = new Alice();

const M = Markup;
alice.command('', async ctx => Reply.text('Её, привет, го по шаурме'));
alice.command('не', async ctx =>
    Reply.text('Эй, ты кто и что ты сделал с Асаном?'),
);
alice.command(
    ['ок'],
    ctx => {
        return {
            text: `Как на счет острой?`,
            buttons: [M.button('Давай острую'), M.button('Давай обычную')],
        };
    },
);
alice.command(/(https?:\/\/[^\s]+)/g, ctx => Reply.text('Эта шо ссылка?'));
alice.any(async ctx => Reply.text(`Моя твоя не понимать`));
const server = alice.listen(3001, '/');