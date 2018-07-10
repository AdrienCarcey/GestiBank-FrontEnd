import { Demande } from './demande'
import { Client } from './client'

export class DemandeInscription extends Demande{

	//Attributes
	client: Client;

	//Constructors
	constructor(){
		super();
	}
}
