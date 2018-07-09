import { Utilisateur } from './utilisateur'
import { SituationFamiliale } from './situation-familiale'
import { Documents } from './documents'
import { Compte } from './compte'

export class Client extends Utilisateur {

	dateOuvertureCompte: Date;
	dateFermetureCompte: Date;
	situationFamiliale: SituationFamiliale;	
	documents: Documents;
	comptes: Array<Compte>;

	constructor(){
		super();
	}
}
