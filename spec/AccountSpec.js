describe('Account', function() {
  var spyTransaction;
  var account;

  beforeEach(function() {
    spyTransaction = jasmine.createSpy();
    account = new Account(spyTransaction);
  });

  it('should have a default balance of 0', function() {
    account.deposit(0);
    expect(spyTransaction).toHaveBeenCalledWith(undefined, 0, 0);
  });

  describe('.deposit', function() {
    it('should increase balance by given amount', function() {
      account.deposit(100);
      expect(spyTransaction).toHaveBeenCalledWith(undefined, 100, 100);
      account.deposit(50);
      expect(spyTransaction).toHaveBeenCalledWith(undefined, 50, 150);
    });
  });

  describe('.withdraw', function() {
    it('should decrease balance by given amount', function() {
      account.withdraw(100);
      expect(spyTransaction).toHaveBeenCalledWith(100, undefined, -100);
      account.withdraw(50);
      expect(spyTransaction).toHaveBeenCalledWith(50, undefined, -150);
    });
  });

});