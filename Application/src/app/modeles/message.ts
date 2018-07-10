import { Demande } from './demande'

export abstract class Message extends Demande {

	//Attributes
	sujet: String;
	message: String;

	//Constructors
	constructor(){
		super();
	}
}
