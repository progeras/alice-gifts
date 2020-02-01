const alice = require('yandex-dialogs-sdk');
const utils = require('./../../utils');
const giftsHelper = require('./giftsHelper');
const _ = require('lodash');

module.exports = function (ctx) {
    utils.setSelected(ctx, {price: ctx.message});
    let g = giftsHelper.getGifts(ctx, 3);
    let answer = g.map((c) => {
        return `${c.title} (${c.price}р)`;
    }).join('\n');

    utils.setScene(ctx, 'gifts-list');
    return alice.Reply.text(answer);
}