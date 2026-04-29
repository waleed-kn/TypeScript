// class Account {
//     protected balance: number = 1000;

// }
// class userAccount extends Account {
//     deposit(amount: number) {
//         this.balance += amount;
//     }
//     showBalance() {
//         console.log(this.balance);
//     }
// }
// const acc = new userAccount()
// acc.deposit(500);
// acc.showBalance()
class Account {
    protected balance: number = 1000;
}
class userAccount extends Account {
    deposit(amount: number) {
        this.balance += amount;
    }
    showBalance() {
        console.log(this.balance);
    }
}
const acc = new userAccount()
acc.deposit(500);
acc.showBalance()