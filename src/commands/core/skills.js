const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const matcher = ['Что ты умеешь ?',
    'Как тобой управлять ?',
    'Покажи свои команды',
    'Покажи свои навыки',
    'Помощь ?'
];

exports.matcher = matcher;
exports.handler = function (ctx) {

    return alice.Reply.text(`${_.sample(['Сейчас я умею', 'Я могу'])} \n` +
        `Перечислять свои умения`, {
            buttons: [alice.Markup.button('Что ты умеешь ?')]
        })
}