const alice = require('yandex-dialogs-sdk');
const utils = require('./../../utils');
const _ = require('lodash');

module.exports = function (ctx) {
	const matches = /.*\d+.*/
	const { message } = ctx
	if(!matches.test(message)){
		const replyes = [
			"Я вообще то спросила возраст... Назовите в годадх, например '5 лет'",
			"Это не возраст, назовите в годах, например '34' или '45 лет'"
		]
		return alice.Reply.text(_.sample(replyes))
	}
	let age = +message.match(/\d+/)
	utils.setSelected(ctx, {age})

	const replyes = [
		'Мы дарим подарок мальчику или девочке?',
		'Выбираем подарок для мальчика или для девочке?'
	]
	utils.setScene(ctx, 'sex')

	return alice.Reply.text(_.sample(replyes), {
		buttons: [alice.Markup.button('Помоги'),]
	})
}

