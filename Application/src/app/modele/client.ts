import {Utilisateur} from './Utilisateur';
import {Adresse} from './Adresse';


export class Client extends Utilisateur {

	mleClient: number;

	constructor(nom: string, prenom: string, email: string,
		password: string, telephone: number, adresse: Adresse,
		mleClient: number){

		super(nom, prenom, email, password, telephone, adresse);
		this.mleClient = mleClient;
	}
}
