var Account = require("../../src/Account.js");

describe('Deposit', function() {
  var header;
  var account;

  beforeEach(function() {
    jasmine.clock().mockDate(new Date(1990, 1, 1));
    console.log = jasmine.createSpy('log');
    header = 'date || credit || debit || balance\n'; 
    account = new Account();
  });

  it('user can make a deposit', function() {
    account.deposit(123.4);
    account.statement;
    const expectedResult = header + '01/02/1990 || 123.40 || || 123.40 \n';
    expect(console.log).toHaveBeenCalledWith(expectedResult);
  });
});