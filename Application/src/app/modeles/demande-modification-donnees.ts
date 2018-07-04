import { DemandeClient } from './demande-client'
import { Client } from './client'

export class DemandeModificationDonnees extends DemandeClient{

	client: Client;

	constructor(){
		super();
	}

}
