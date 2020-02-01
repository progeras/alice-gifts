'use strict';

const app = require('./app');

const PORT = 80;

const bot = new app();
bot.listen(PORT);

