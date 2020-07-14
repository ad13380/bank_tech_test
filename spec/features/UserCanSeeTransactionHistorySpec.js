describe("Statement", function() {
var header
var account

  beforeEach(function() {
    jasmine.clock().mockDate(new Date(1990, 1, 1));
    console.log = jasmine.createSpy("log");
    header = 'date || credit || debit || balance\n'; 
    account = new Account();
  });

  it("user can see transaction history", function() {
    account.deposit(123.4)
    account.withdraw(100.56)
    jasmine.clock().mockDate(new Date(1990, 1, 2));
    account.withdraw(10)
    jasmine.clock().mockDate(new Date(1990, 1, 3));
    account.deposit(1000)
    account.statement
    const expectedResult = header + '03/02/1990 || 1000.00 || || 1012.84 \n'
                                  + '02/02/1990 || || 10.00 || 12.84 \n'
                                  + '01/02/1990 || || 100.56 || 22.84 \n'
                                  + '01/02/1990 || 123.40 || || 123.40 \n'
    expect(console.log).toHaveBeenCalledWith(expectedResult);
  });
})