import { Compte } from "./compte";

export class Client {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	mobil: string;
	dateOfBirth: Date;
	comptes: Compte[];
}
