import { Transaction } from './Transaction';

export class Compte {

	numCompte: number;
	dateCreation: Date;
	solde: number;
	montantDecouvert: number;
	historique: Array<Transaction>;
	etatCompte: string; // valide ou invalide, à redefinir avec une enumeration

	constructor(numCompte: number, dateCreation: Date, solde: number, 
		montantDecouvert: number, historique: Array<Transaction>, 
		etatCompte: string){

		this.numCompte = numCompte;
		this.dateCreation = dateCreation;
		this.solde = solde;
		this.montantDecouvert = montantDecouvert;
		this.historique = historique;
		this.etatCompte = etatCompte;
	}
}
