import { Transaction } from './Transaction';

export class Compte {

	numCompte: number;
	dateCreation: Date;
	solde: number;
	montantDecouvert: number;
	historique: Array<Transaction>;
	etatCompte: string; // valide ou invalide, à redefinir avec une enumeration
}
