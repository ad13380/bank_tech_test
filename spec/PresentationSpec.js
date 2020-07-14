describe('Presentation', function() {
  var presentation;
  var spyTransaction;
  const header = 'date || credit || debit || balance\n'; 

  beforeEach(function() {
    presentation = new Presentation();
    spyTransaction = new Transaction;
    spyOnProperty(spyTransaction, 'date', 'get').and.returnValue(new Date(2011, 12, 13));
    spyOnProperty(spyTransaction, 'credit', 'get').and.returnValue(900);
    spyOnProperty(spyTransaction, 'balance', 'get').and.returnValue(900);
    spyTransaction2 = new Transaction;
    spyOnProperty(spyTransaction2, 'date', 'get').and.returnValue(new Date(2011, 12, 14));
    spyOnProperty(spyTransaction2, 'debit', 'get').and.returnValue(300);
    spyOnProperty(spyTransaction2, 'balance', 'get').and.returnValue(-300);
    spyTransaction3 = new Transaction;
    spyOnProperty(spyTransaction3, 'date', 'get').and.returnValue(new Date(2011, 12, 14));
    spyOnProperty(spyTransaction3, 'debit', 'get').and.returnValue(300.99);
    spyOnProperty(spyTransaction3, 'balance', 'get').and.returnValue(599.01);
  });
  
  it('should return a header', function() {
    expect(presentation.statement([])).toEqual(header);
  });

  it('correctly formats a deposit transaction', function() {
    const expectedResult = header + '13/01/2012 || 900.00 || || 900.00 \n';
    expect(presentation.statement([spyTransaction])).toEqual(expectedResult);
  });

  it('correctly formats a withdrawal transaction', function() {
    const expectedResult = header + '14/01/2012 || || 300.00 || -300.00 \n';
    expect(presentation.statement([spyTransaction2])).toEqual(expectedResult);
  });

  it('correctly formats a multiple transaction', function() {
    const expectedResult = header + '14/01/2012 || || 300.99 || 599.01 \n'
                                  + '13/01/2012 || 900.00 || || 900.00 \n';
    expect(presentation.statement([spyTransaction, spyTransaction3])).toEqual(expectedResult);
  });
});