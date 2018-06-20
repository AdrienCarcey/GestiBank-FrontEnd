import { Transaction } from './Transaction'
import { Compte } from './Compte'

export class CompteRemunere extends Compte {

	txRemuneration: number;


	constructor(numCompte: number, dateCreation: Date, solde: number, 
		montantDecouvert: number, historique: Array<Transaction>, 
		etatCompte: string, txRemuneration: number){
		super(numCompte, dateCreation, solde, montantDecouvert,
			historique, etatCompte);
		this.txRemuneration = txRemuneration;
	}
}
