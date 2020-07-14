# Bank Tech Test
## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
## How To Use
1. Clone this repo.
2. Open browser console.
3. Set up your account
  ```js
  account = new Account()
  ```
4. Interact with your account
  ```js
  // desposit an amount
  account.deposit(AN_AMOUNT)
  
  // withdraw an amount
  account.withdraw(AN_AMOUNT)
  
  //review transaction history
  account.statement
  ```
## Reviewing Tests
Open `SpecRunner.html` in your terminal. 
```
$ open SpecRunner.html
```
All tests should be green as shown

<img src="./images/jasmine_tests.png" width="400">

## UML Diagram
<img src="./images/UML_diagram.png" width="700">
