import { OperationBancaire } from './operation-bancaire'

export abstract class Compte {

	idCompte: number;
	statut: boolean;
	solde: number;
	operationsBancaire: Array<OperationBancaire>;
}
