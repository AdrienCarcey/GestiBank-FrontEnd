import { Identite } from './identite'
import { Contact } from './contact'
import { Demande } from './demande'

export abstract class Utilisateur {

	//Attributes
	idUtilisateur: number;
	statut: string;
	nomUtilisateur: string;
	motDePasse: string;
	identite: Identite;
	contact: Contact;
	demandes: Array<Demande>;

	//Constructors
	constructor(){}
}
