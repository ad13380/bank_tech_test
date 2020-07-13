'use strict';

class Account {
  constructor(transactionClass = Transaction) {
    this.transactionClass = transactionClass;
    this._balance = 0;
  }
  
  deposit(amount) {
    this._updateBalance(amount);
    new this.transactionClass(undefined, amount, this._balance);
  }

  withdraw(amount) {
    this._updateBalance(-amount);
    new this.transactionClass(amount, undefined, this._balance);
  }

  _updateBalance(amount) {
    this._balance += amount;
  }
}