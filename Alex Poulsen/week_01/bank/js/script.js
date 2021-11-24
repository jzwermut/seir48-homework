// # JavaScript Bank
//
// In this homework, you'll create a basic `bank` in Javascript. The bank has many `accounts` and the following capabilities that you need to write.
//
// #### Bank
//
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an `addAccount` method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// #### Accounts
//
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions `console.log()` values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// ### Tips
//
// Don't overthink this. Shorter code is probably the answer.
//
// ## Bonus
//
// - Ensure that the accounts cannot have negative values.
// - Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
//

const theBank = {
  accounts: [
    {
      owner: 'John Smith',
      currentBalance: 550,
    }
  ],
  showTotalAmount() {
    let total = 0;
    for ( let i = 0; i < this.accounts.length; i++ ) {
      total += this.accounts[i].currentBalance;
    }
    return total;
  },
  addAccount( name, openingBalance ) {
    console.log(`New account for ${ name } opened. Current Balance is $${ openingBalance}`)
    return this.accounts.push({ owner: name, currentBalance: openingBalance })
  },
  withdraw( accountName, amount ) {
    console.log(`Withdrawing $${ amount } from ${ accountName}'s account`);
    for (let i in this.accounts) {
      if ( this.accounts[i].owner === accountName ) {
        let account = this.accounts[i]
        this.accounts[i].currentBalance -= amount;
        console.log(`New account balance for ${account.owner} is $${account.currentBalance}`);
        return account.currentBalance;
      }
    }
  },
  deposit( accountName, amount ) {
    console.log(`Depositing $${ amount } into ${ accountName}'s account`);
    for (let i in this.accounts) {
      if ( this.accounts[i].owner === accountName ) {
        let account = this.accounts[i]
        this.accounts[i].currentBalance += amount;
        console.log(`New account balance for ${account.owner} is $${account.currentBalance}`);
        return account.currentBalance;
      }
    }
  },
  transfer( fromAccount, toAccount, amount) {
    console.log(`Transferring $${ amount } from ${ fromAccount } to ${ toAccount }`);
    this.withdraw( fromAccount, amount );
    this.deposit( toAccount, amount);
  }
}

console.log(theBank.showTotalAmount());
theBank.addAccount('Jimmy Buffet', 2000);
console.log(theBank.showTotalAmount());
theBank.withdraw( 'Jimmy Buffet', 500 );
console.log(theBank.showTotalAmount());
theBank.deposit( 'John Smith', 1000);
console.log(theBank.showTotalAmount());
theBank.addAccount( 'Lex Poulsen', 2500);
console.log(theBank.showTotalAmount());
theBank.transfer('John Smith', 'Lex Poulsen', 1000);
