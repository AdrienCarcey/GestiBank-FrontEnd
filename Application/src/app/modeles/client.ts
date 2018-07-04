import { Utilisateur } from './utilisateur'
import { SituationFamiliale } from './situation-familiale'
import { Documents } from './documents'
import { Compte } from './compte'
import { DemandeClient } from './demande-client'

export class Client extends Utilisateur {

	dateOuvertureCompte: Date;
	dateFermetureCompte: Date;
	situationFamiliale: SituationFamiliale;	
	documents: Documents;
	comptes: Array<Compte>;
	demandes: Array<DemandeClient>;

	constructor(){
		super();
	}
}
