const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

exports.matcher = function (ctx) {
    return ctx.data.session.new === true;
}

exports.handler = function (ctx) {
    const qwestions = [
        "Сколько лет тому, кому Вы дарите подарок?"
    ]

    ctx.session.set('scene', 'age');


    return alice.Reply.text(`${_.sample([
        'Привет! Тебя приветствует навык Выбор подарка',
        'навык Выбор подарка вас слушает.',
        'Навык Выбор подарка запущен'])} ${_.sample(qwestions)}`, {
        buttons: [alice.Markup.button('Что ты умеешь?'),]
    })
}