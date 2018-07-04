import { Compte } from './compte'

export class CompteCourantAvecDecouvert extends Compte{

	entreeMensuelle: number;
	montantDecouvert: number;

	constructor(){
		super();
	}
}
