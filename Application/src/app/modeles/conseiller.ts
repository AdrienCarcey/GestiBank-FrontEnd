import { Utilisateur } from './utilisateur'
import { Client } from './client'

export class Conseiller extends Utilisateur {

	//Attributes
	dateDebutContrat: Date;
	dateFinContrat: Date;
	clients: Array<Client>;

	//Constructors
	constructor(){
		super();
	}
}
