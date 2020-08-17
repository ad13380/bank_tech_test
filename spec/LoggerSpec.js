var Logger = require("../src/Logger.js");

describe('Logger', function() {
  var spyTransaction;
  var spyTransaction2;
  var logger;

  beforeEach(function() {
    spyTransaction = jasmine.createSpy();
    spyTransaction2 = jasmine.createSpy();
    logger = new Logger;
  });

  describe('.add', function() {
    it('should store a transaction in memory', function() {
      logger.addEntry(spyTransaction);
      expect(logger.history).toEqual([spyTransaction]);
    });
  });

  describe('.history', function() {
    it('should by empty by default', function() {
      expect(logger.history.length).toEqual(0);
    });

    it('should store past transactions', function() {
      logger.addEntry(spyTransaction);
      logger.addEntry(spyTransaction2);
      expect(logger.history).toEqual([spyTransaction, spyTransaction2]);
    });
  });
});