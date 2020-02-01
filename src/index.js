'use strict';

const app = require('./app');

const PORT = 3001;

const bot = new app();
bot.listen(PORT);

