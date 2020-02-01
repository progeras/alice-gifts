const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

exports.matcher = function (ctx) {
    return ctx.data.session.new === true;
}

exports.handler = function (ctx) {
    const qwestions = [
        "Первый вопрос: сколько лет тому, кому Вы будете дарить подарок?",
        "Давайте начнем. Для какого возраста мы ищем подарок?",
        "На какой возраст нужен подарок?"
    ]

    ctx.session.set('scene', 'age');
    ctx.session.set('selected', {});

    return alice.Reply.text(`${_.sample([
        'Привет! Тебя приветствует навык Выбор подарка. Расскажите мне про пол, возраст и денежную сумму, которую вы готовы потратить. ',
        'навык Выбор подарка вас слушает. Я начну задавать вопросы, чтобы помочь вам выбрать подарок.',
        'Навык Выбор подарка запущен. Сообщите пожалуйста данные, по которым я смогу посоветовать вам подарок. '])} ${_.sample(qwestions)}`, {
        buttons: [alice.Markup.button('Что ты умеешь?')]
    })
}