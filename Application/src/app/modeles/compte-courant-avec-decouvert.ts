import { Compte } from './compte'

export class CompteCourantAvecDecouvert extends Compte{

	//Attributes
	entreeMensuelle: number;
	montantDecouvert: number;

	//Constructors
	constructor(){
		super();
	}
}
