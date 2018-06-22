import { Utilisateur } from './utilisateur';
import { Adresse } from './adresse';

export class Conseiller extends Utilisateur {

	matricule: number;
	dateDebutContrat: Date;

	constructor(nom: string, prenom: string, email: string,
		password: string, telephone: number, adresse: Adresse,
		matricule: number, dateDebutContrat: Date){

		super(nom, prenom, email, password, telephone, adresse);
		this.matricule = matricule;
		this.dateDebutContrat = dateDebutContrat;
	}
}
