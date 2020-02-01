const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const age = require('./questions/age');

const matcher = /.*/

exports.matcher = matcher;
exports.handler = function (ctx) {
    const currState = ctx.session.get('scene');
    if(currState === 'age'){
        return age(ctx);
    } 
    else if(currState === 'sex'){
        return sex(ctx);
    }
    else if(currState === 'price'){
        return price(ctx);
    }
    return alice.Reply.text(`
        Сюда впилить роутинг в соответствие со стейтом
    `)
}