import {Utilisateur} from './Utilisateur';
import {Adresse} from './Adresse';


export class Administrateur extends Utilisateur {

	matricule: number;
	fonction: string;
	dateDebutContrat: Date;

	constructor(nom: string, prenom: string, email: string,
		password: string, telephone: number, adresse: Adresse,
		matricule: number, 	fonction: string, dateDebutContrat: Date){

		super(nom, prenom, email, password, telephone, adresse);
		this.matricule = matricule;
		this.fonction = fonction;
		this.dateDebutContrat = dateDebutContrat;
	}

}

