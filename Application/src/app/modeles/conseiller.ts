import { Utilisateur } from './utilisateur'
import { Client } from './client'

export class Conseiller extends Utilisateur {

	dateDebutContrat: Date;
	dateFinContrat: Date;
	clients: Array<Client>;

	constructor(){
		super();
	}
}
