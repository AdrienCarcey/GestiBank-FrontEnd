import { DemandeClient } from './demande-client'
import { Client } from './client'

export class DemandeModificationDonnees extends DemandeClient{

	//Attributes
	client: Client;

	//Constructors
	constructor(){
		super();
	}
}
