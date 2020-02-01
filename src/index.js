'use strict';

const app = require('./app');

const PORT = 3000;

const bot = new app();
bot.listen(PORT);

