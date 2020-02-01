const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

module.exports = function (ctx) {
	ctx.session.set('scene', 'price');
	return alice.Reply.text(' Тут я узнала возраст и спосила пол');
}