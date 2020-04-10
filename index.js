class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  isAllowed() {
    if (this.account.balance + this.value >= 0) {
      return true
    } return false
  }

  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this);
      return true
    } return false
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount
  }

}

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let result = 0;
    for (const obj of this.transactions) {
      result += obj.value
    }
    return result
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}


// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log('Transaction 3:', t3);

t1 = new Withdrawal(20, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(50, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.balance);


