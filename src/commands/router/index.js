const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const matcher = /.*/

exports.matcher = matcher;
exports.handler = function (ctx) {

    return alice.Reply.text(`
        Сюда впилить роутинг в соответствие со стейтом
    `)
}