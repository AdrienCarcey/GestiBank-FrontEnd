import { DemandeClient } from './demande-client'
import { Compte } from './compte'

export class DemandeCompte extends DemandeClient {

	//Attributes
	idCompte: number;
	compte: Compte;

	//Constructors
	constructor(){
		super();
	}
}
