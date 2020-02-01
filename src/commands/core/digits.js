const alice = require('yandex-dialogs-sdk');

const matcher = /^[0-9]*$/g;



exports.matcher = matcher;
exports.handler = function (ctx) {
    const scene = ctx.session.get('scene');

    if(scene === 'age'){
        ctx.session.set('scene', 'sex');
        return alice.Reply.text(`
        'Это мужчина или женщина?'
    `)
    } else if(scene === 'price'){
        ctx.session.set('scene', 'gifts-list');
        return alice.Reply.text(`Вывести список товаров...`)
    }

};