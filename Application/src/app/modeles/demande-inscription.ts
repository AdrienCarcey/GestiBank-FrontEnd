import { Demande } from './demande'
import { Client } from './client'

export class DemandeInscription extends Demande{

	client: Client;

	constructor(){
		super();
	}
}
