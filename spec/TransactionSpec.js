describe("Transaction", function() {
  var transaction;

  beforeEach(function() {
    transaction = new Transaction();
  });

  describe(".debit", function() {
    it("should have a default value of 0", function() {
      expect(transaction.debit).toEqual(0);
    });
  });

  describe(".credit", function() {
    it("should have a default value of 0", function() {
      expect(transaction.credit).toEqual(0);
    });
  });

  describe(".date", function() {
    it("should return the current date", function() {
      jasmine.clock().mockDate(new Date(1970, 1, 1));
      const transMockTime = new Transaction();
      expect(transMockTime.date).toEqual(new Date(1970, 1, 1));
    });
  });
});