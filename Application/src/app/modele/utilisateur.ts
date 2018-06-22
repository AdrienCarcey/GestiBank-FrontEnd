import { Adresse } from './adresse';

export abstract class Utilisateur {

	nom: string;
	prenom: string;
	email: string;
	password: string;
	telephone: number;
	adresse: Adresse;

	constructor(nom: string, prenom: string, email: string,
		password: string, telephone: number, adresse: Adresse){
		
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.password = password;
		this.email = email;
		this.adresse = adresse;
	}

}
