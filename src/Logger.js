'use strict';

class Logger {
  constructor() {
    this._history = [];
  }

  addEntry(transaction) {
    this._history.push(transaction);
  }

  get history() {
    return this._history;
  }
}

module.exports = Logger;