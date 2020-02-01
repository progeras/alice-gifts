const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const matcher = /(Мужчина)|(Женщина)|(Мужик)|(Парень)|(Бабушка)|(Дед)|(Девочка)|(Парень)|(Мальчик)|(Девочка)|/ig

exports.matcher = matcher;
exports.handler = function (ctx) {
    const qwestions = [
        "Сколько рублей вы готовы потратить на подарок?"
    ]
    ctx.session.set('scene', 'price');

    return alice.Reply.text(`
        ${_.sample(qwestions)} 
    `)
}