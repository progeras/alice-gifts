const alice = require('yandex-dialogs-sdk');
const _ = require('lodash');

module.exports = function (ctx) {
	let selected = ctx.session.get('selected') || {};
	selected.age = 25;
	ctx.session.set('selected', selected);
	return alice.Reply.text(' Тут я узнала возраст и спосила пол');
}