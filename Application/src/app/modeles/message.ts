import { Demande } from './demande'

export abstract class Message extends Demande {

	sujet: String;
	message: String;

	constructor(){
		super();
	}
}
