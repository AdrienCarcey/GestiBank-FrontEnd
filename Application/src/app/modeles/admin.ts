import { Utilisateur } from './utilisateur'
import { Conseiller } from './conseiller'

export class Admin extends Utilisateur{

	dateDebutContrat: Date;
	dateFinContrat: Date;
	conseillers: Array<Conseiller>;

	constructor(){
		super();
	}
}
