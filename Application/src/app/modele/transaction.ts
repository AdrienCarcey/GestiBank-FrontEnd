export abstract class Transaction {

	montantTransaction: number;
	dateTransaction: Date;

	constructor(montantTransaction: number,
	  dateTransaction: Date){
		this.montantTransaction = montantTransaction;
		this.dateTransaction = dateTransaction;
	}


}
