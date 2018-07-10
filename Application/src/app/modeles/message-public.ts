import { Message } from './message'

export class MessagePublic extends Message {

	//Attributes
	titreCivilite: String;
	nom: String;
	prenom: String;
	email: String;

	//Constructors
	constructor(){
		super();
	}
}
