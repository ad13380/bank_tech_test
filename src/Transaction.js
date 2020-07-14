'use strict';

class Transaction {
  constructor(debit = 0, credit = 0, balance) {
    this._date = new Date;
    this._credit = credit;
    this._debit = debit;
    this._balance = balance;
  }

  get date() {
    return this._date;
  }

  get credit() {
    return this._credit;
  }

  get debit() {
    return this._debit;
  }

  get balance() {
    return this._balance;
  }
}