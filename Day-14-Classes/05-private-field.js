//Activity 5: Private Fields (Optional)

//Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated throught these methods.

class Account {
  #balance;

  //Constructor to initalize balance
  constructor(initialBalance) {
    if (initialBalance >= 0) {
      this.#balance = initialBalance;
    } else {
      this.#balance = 0;
      cconsole.log(`Inital Balance must be greater than 0`);
    }
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(
        `Amount Deposited $${amount}.New balance is $${this.#balance}`
      );
    } else {
      console.log(`Deposit should be positive`);
    }
  }

  withdrawl(amount) {
    if (amount > 0) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`$${amount} is debited New balance $${this.#balance}`);
      } else {
        console.log("Insufficient balance");
      }
    } else {
      console.log("Amount must be greater than 0");
    }
  }

  getBalance() {
    return this.#balance;
  }
}
//Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation
const myAccount = new Account(200);
myAccount.deposit(50);
console.log(`$${myAccount.getBalance()}`);
myAccount.withdrawl(20);
console.log(`$${myAccount.getBalance()}`);
