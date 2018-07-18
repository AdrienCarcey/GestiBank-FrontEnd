import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Client } from "../modeles/client";
import { Compte } from "../modeles/compte";
import { OperationBancaire } from "../modeles/operation-bancaire";
import { Demande } from "../modeles/demande";

@Injectable()
export class EspaceConseillerService {
	private getEspaceConseillerUrl: string = "http://localhost:9090/GestiBankBackEnd/conseiller";

	constructor(private http: Http) {}

	findAllClients(idConseiller: number): Observable<Array<Client>> {
		return this.http.get(this.getEspaceConseillerUrl+"/"+idConseiller)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findClientByName(nomUtilisateur: String): Observable<Client> {
		return this.http.post(this.getEspaceConseillerUrl, nomUtilisateur)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findClientAccount(idClient: number): Observable<Client> {
		return this.http.get(this.getEspaceConseillerUrl+"/clients/"+idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	openClientAccount(idClient: number): Observable<Boolean> {
		return this.http.get(this.getEspaceConseillerUrl+"/client/"+idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	closeClientAccount(idClient: number): Observable<Boolean> {
		return this.http.delete(this.getEspaceConseillerUrl+"/client/"+idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	updateClientAccount(idClient: number, client: Client): Observable<Boolean> {
		return this.http.put(this.getEspaceConseillerUrl+"/client/"+idClient, client)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findClientCompte(idCompte: number): Observable<Compte> {
		return this.http.get(this.getEspaceConseillerUrl+"/comptes/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	openClientCompte(idCompte: number): Observable<Boolean> {
		return this.http.get(this.getEspaceConseillerUrl+"/compte/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	closeClientCompte(idCompte: number): Observable<Boolean> {
		return this.http.delete(this.getEspaceConseillerUrl+"/compte/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findCompteOperation(idCompte: number): Observable<Array<OperationBancaire>> {
		return this.http.get(this.getEspaceConseillerUrl+"/operations/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findAllDemandes(idConseiller: number): Observable<Object> {
		return this.http.get(this.getEspaceConseillerUrl+"/demandes/"+idConseiller)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	validateDemande(idDemande: number, idConseiller: String): Observable<Boolean> {
		return this.http.post(this.getEspaceConseillerUrl+"/demandes/"+idDemande, idConseiller)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	refuseDemande(idDemande: number): Observable<Boolean> {
		return this.http.delete(this.getEspaceConseillerUrl+"/demandes/"+idDemande)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	dashboard(idConseiller: number): Observable<Array<String>> {
		return this.http.get(this.getEspaceConseillerUrl+"/dashboard/"+idConseiller)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
}
