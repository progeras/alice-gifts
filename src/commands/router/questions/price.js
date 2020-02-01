const alice = require('yandex-dialogs-sdk');
const utils = require('./../../utils');
const giftsHelper = require('./giftsHelper');
const _ = require('lodash');

module.exports = function (ctx) {
    const matches = /.*\d+.*/
    const { message } = ctx
    if(!matches.test(message)){
        const replyes = [
            "Я вообще-то спросила цену... Назовите плиз цену в рублях'",
            "Это не цена, назовите в рублях, например '1000' или '1500'"
        ];
        return alice.Reply.text(_.sample(replyes))
    }
    let price = +message.match(/\d+/)

    utils.setSelected(ctx, {price: price});

    let g = giftsHelper.getGifts(ctx, 3);
    let answer = g.map((c) => {
        return `${c.title} (${c.price}р)`;
    }).join('\n');

    utils.setScene(ctx);
    return alice.Reply.text(answer);
}