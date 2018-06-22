import { Utilisateur } from './utilisateur';
import { Adresse } from './adresse';


export class Client extends Utilisateur {

	mleClient: number;

	constructor(nom: string, prenom: string, email: string,
		password: string, telephone: number, adresse: Adresse,
		mleClient: number){

		super(nom, prenom, email, password, telephone, adresse);
		this.mleClient = mleClient;
	}
}
