import { OperationBancaire } from './operation-bancaire'

export abstract class Compte {

	//Attributes
	idCompte: number;
	statut: boolean;
	solde: number;
	operationsBancaire: Array<OperationBancaire>;
}
