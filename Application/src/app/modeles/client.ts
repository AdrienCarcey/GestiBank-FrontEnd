import { Utilisateur } from './utilisateur'
import { SituationFamiliale } from './situation-familiale'
import { Documents } from './documents'
import { Compte } from './compte'

export class Client extends Utilisateur {

	//Attributes
	dateOuvertureCompte: Date;
	dateFermetureCompte: Date;
	situationFamiliale: SituationFamiliale;	
	documents: Documents;
	comptes: Array<Compte>;

	//Constructors
	constructor(){
		super();
	}
}
