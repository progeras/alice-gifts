'use strict';

const { Alice, Stage, Scene, Reply } = require('yandex-dialogs-sdk');
const commands = require('./commands');
const utils = require('./commands/utils');
const defaultConfig = require('./config');

const alice = new Alice();
class TestAliceBot {
  constructor(config = defaultConfig) {
    this.config = config;
    this.init();
  }

  async init() {
    commands.utils.useCommands(alice, commands.core);
    alice.any(commands.core.any.handler);
  }

  listen(port) {
    const server = alice.listen(port, '/');
    console.log(`Server started on :${port}`);
  }
}

module.exports = TestAliceBot;
