class BankAccount{
	#balance;
	constructor(initialbalance){
		 this.#balance=initialbalance;
	}

	deposit(amount){
		this.#balance+=amount;
		return this.#balance
	}

	getbalance(){
		return this.#balance
	}
}

const acc = new BankAccount(1000);
console.log("current balance:",acc.getbalance());
console.log("updated balance",acc.deposit(500));