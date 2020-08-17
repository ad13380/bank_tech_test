'use strict';

class Presentation {
  constructor() {
    this._header = 'date || credit || debit || balance';
    this._divider = '||';
  }
  
  statement(history) {
    return history.reverse().reduce((acc, val) => {
      return acc += [this._formatDate(val.date),
        this._formatAmount(val.credit),
        this._formatAmount(val.debit),
        this._formatAmount(val.balance)]
        .join(this._divider)
        + '\n';
    }, `${this._header}\n`);
  }

  _formatAmount(amount) {
    if (!amount) { return ' '; }

    return ` ${amount.toFixed(2)} `;
  }

  _formatDate(date) {
    let parts = date.toISOString().split('T')[0].split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]} `;
  }
}

module.exports = Presentation;