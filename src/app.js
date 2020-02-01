'use strict';

const { Alice, Stage, Scene, Reply } = require('yandex-dialogs-sdk');
const { createMiddleware, createStorage } = require('yandex-dialogs-sdk-lowdb');
const defaultConfig = require('./config');

const welcome = require('./commands/welcome');
const skills = require('./commands/skills');
const any = require('./commands/any');
const router = require('./commands/router');
const exit = require('./commands/exit');

const alice = new Alice();
const storage = createStorage('database.json');
alice.use(createMiddleware(storage));

class AliceGiftsBot {
  constructor(config = defaultConfig) {
    this.config = config;
    this.init();
  }

  init() {
    //alice.use(getResults());
    alice.command(welcome.matcher, welcome.handler);
    alice.command(skills.matcher, skills.handler);
    alice.command(exit.matcher, exit.handler);
    alice.command(router.matcher, router.handler);
    alice.any(any.handler);
  }

  listen(port) {
    const server = alice.listen(port, '/');
    console.log(`Server started on :${port}`);
  }
}

module.exports = AliceGiftsBot;
