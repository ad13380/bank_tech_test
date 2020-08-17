'use strict';
var Transaction = require("./Transaction.js");
var Logger = require("./Logger.js");
var Presentation = require("./Presentation.js");

class Account {
  constructor(transactionClass = Transaction, logger = new Logger(), presentation = new Presentation()) {
    this.DEFAULT_BALANCE = 0;
    this.transactionClass = transactionClass;
    this.logger = logger;
    this.presentation = presentation;
    this._balance = this.DEFAULT_BALANCE;
  }
  
  deposit(amount) {
    this._updateBalance(amount);
    this._logEntry(new this.transactionClass(undefined, amount, this._balance));
  }

  withdraw(amount) {
    this._updateBalance(-amount);
    this._logEntry(new this.transactionClass(amount, undefined, this._balance));
  }

  get statement() {
    console.log(this.presentation.statement(this.logger.history));
  }

  _logEntry(transaction) {
    this.logger.addEntry(transaction);
  }

  _updateBalance(amount) {
    this._balance += amount;
  }
}

module.exports = Account;