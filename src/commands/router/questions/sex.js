const alice = require('yandex-dialogs-sdk');
const utils = require('./../../utils');
const _ = require('lodash');

module.exports = function (ctx) {
	const gender = ctx.message;
	if (/(Мужчина)|(Мужик)|(Парень)|(Мальчик)|(Дед)/i.test(gender)) {
		utils.setSelected(ctx, {sex: 'M'});
	} else if (/(Женщина)|(Баба)|(Девушка)|(Девочка)|(Бабушка)/i.test(gender)) {
		utils.setSelected(ctx, {sex: 'F'});
	} else {
		return alice.Reply.text('Укажите, пожалуйста, пол правильно. Например, мужчина или женщина');
	}
	const replyes = [
		'Отлично. Сколько вы готовы потратить в рублях на подарок?',
		'Я вас поняла. На какую сумму ищем подарок?'
	]
	utils.setScene(ctx, 'price')

	return alice.Reply.text(_.sample(replyes))
}