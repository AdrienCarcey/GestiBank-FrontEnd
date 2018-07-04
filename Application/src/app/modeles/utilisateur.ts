import { Identite } from './identite'
import { Contact } from './contact'

export abstract class Utilisateur {

	idUtilisateur: number;
	nomUtilisateur: string;
	motDePasse: string;
	identite: Identite;
	contact: Contact;

}
