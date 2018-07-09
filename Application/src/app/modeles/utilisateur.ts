import { Identite } from './identite'
import { Contact } from './contact'
import { Demande } from './demande'

export abstract class Utilisateur {

	idUtilisateur: number;
	nomUtilisateur: string;
	motDePasse: string;
	identite: Identite;
	contact: Contact;
	demandes: Array<Demande>;

}
