import { Utilisateur } from './utilisateur'
import { Conseiller } from './conseiller'

export class Admin extends Utilisateur{

	//Attributes
	dateDebutContrat: Date;
	dateFinContrat: Date;
	conseillers: Array<Conseiller>;

	//Constructors
	constructor(){
		super();
	}
}
