const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

const age = require('./questions/age');
const sex = require('./questions/sex');
const price = require('./questions/price');

const matcher = /.*/

exports.matcher = matcher;
exports.handler = function (ctx) {
    const currState = ctx.session.get('scene');
    if(currState === 'default'){
        return age(ctx);
    }
    if(currState === 'age'){
        return age(ctx);
    } 
    else if(currState === 'sex'){
        return sex(ctx);
    }
    else if(currState === 'price'){
        return price(ctx);
    }
    return age(ctx)
}