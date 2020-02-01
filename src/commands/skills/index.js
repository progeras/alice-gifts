const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const matcher = /(Что ты умеешь)|(Помоги)|(Как тобой управлять)|(Покажи свои (команды|навыки))|(.*помощь.*)/ig

exports.matcher = matcher;
exports.handler = function (ctx) {
    const lastState = ctx.session.get('last-scene') || 'age';
    let questions;
    switch (lastState) {
        case 'age':
            questions = 'Уточните, сколько полных лет человеку. Например, 18 лет, 2 года, 45лет';
            break;
        case 'sex':
            questions = 'Определите пол. Это мужчина или женщина?';
            break;
        case 'price':
            questions = `Необходимо обозначить, сколько вы готовы потратить денег в рублях. 
            Например: 1000 рублей, 20, 351 рубль`;
            break;
        default:
            questions = `Я вас не поняла. Ответьте более детально`; 
    }

    ctx.session.set('scene', lastState);

    return alice.Reply.text(`
        Я помогу выбрать подарок для человека по его описанию
        Расскажите мне про пол, возраст и денежную сумму, которую вы готовы потратить.
        Чтобы Вы не заблудились в навыке, он задаст дополнительные вопросы.
        ${questions} 
    `)
}