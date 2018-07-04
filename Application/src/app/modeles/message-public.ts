import { Message } from './message'

export class MessagePublic extends Message {

	titreCivilite: String;
	nom: String;
	prenom: String;
	email: String;

	constructor(){
		super();
	}
}
