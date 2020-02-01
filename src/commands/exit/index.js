const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const matcher = /(надоел(а|о|и))|прощай|конец|хватит|выход|пока/ig

exports.matcher = matcher;
exports.handler = function (ctx) {
    const goodBy = [
        'Спасибо. что посетили навык',
        "До встречи!",
        "Понадобится помощь - обращайтесь"
    ]

    return alice.Reply.text(_.sample(goodBy), {end_session: true}) 
}