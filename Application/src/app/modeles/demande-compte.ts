import { DemandeClient } from './demande-client'
import { Compte } from './compte'

export class DemandeCompte extends DemandeClient {

	idCompte: number;
	compte: Compte;

	constructor(){
		super();
	}
}
