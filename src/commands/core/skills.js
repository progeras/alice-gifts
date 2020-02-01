const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const matcher = /(Что ты умеешь)|(Как тобой управлять)|(Покажи свои (команды|навыки))|(.*помощь.*)/ig

exports.matcher = matcher;
exports.handler = function (ctx) {
    const qwestions = [
        "Кому будем дарить подарок?"
    ]

    return alice.Reply.text(`
        Я помогу выбрать подарок для человека по его описанию
        Расскажите мне про пол, возраст и денежную сумму, которую вы готовы потратить.
        Чтобы Вы не заблудились в навыке, он задаст дополнительные вопросы
        ${_.sample(qwestions)} 
    `)
}