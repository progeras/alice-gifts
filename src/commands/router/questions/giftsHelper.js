const gifts = require('./../../../gifts');
const utils = require('./../../utils');

module.exports.getGifts = function (ctx, count) {
    let current = utils.getSelected(ctx),
        filtered = gifts;
    if(current.age){
        filtered = filtered.filter((c) => {
            return current.age >= c.min_age && current.age <= c.max_age;
        })
    }

    if(current.price){
        filtered = filtered.filter((c) => {
            return c.price <= current.price;
        })
    }

    if(current.sex){
        filtered = filtered.filter((c) => {
            return c.sex.includes(current.sex);
        })
    }

    return filtered.sort((a, b) => {
        return b.price - a.price
    }).slice(0, count);

}