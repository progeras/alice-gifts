'use strict';

const app = require('./app');

const PORT = process.env.PORT || 8000;

const bot = new app();
bot.listen(PORT);

