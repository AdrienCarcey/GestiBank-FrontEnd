export class Adresse {

	nRue: number;
	nomRue: string;
	codePostal: number;
	ville: string;

	constructor(nRue: number, nomRue: string, codePostal: number, 
		ville: string) {
		
		this.nRue = nRue;
		this.nomRue = nomRue;
		this.codePostal = codePostal;
		this.ville = ville;
	}

}
