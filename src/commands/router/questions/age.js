const alice = require('yandex-dialogs-sdk');
const utils = require('./../../utils');
const _ = require('lodash');

module.exports = function (ctx) {
	utils.setSelected(ctx, {age: ctx.message});
	return alice.Reply.text(' Тут я узнала возраст и спосила пол');
}