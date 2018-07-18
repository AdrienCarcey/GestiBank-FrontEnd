import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { OperationBancaire } from "../modeles/operation-bancaire";
import { Compte } from "../modeles/compte";
import { MessageClient } from '../modeles/message-client';
import { Client } from '../modeles/client';
import { DemandeChequier } from '../modeles/demande-chequier';
import { DemandeRib } from '../modeles/demande-rib';

@Injectable()
export class EspaceClientService {


	private getEspaceClientUrl: string = "http://localhost:9090/GestiBankBackEnd/client";

	constructor(private http: Http){}

	findComptesById(idClient: number): Observable<Array<Compte>> {
		return this.http.get(this.getEspaceClientUrl + "/comptes/" + idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findOperationsById(idCompte: number): Observable<Array<OperationBancaire>> {
		return this.http.get(this.getEspaceClientUrl + "/operations/" + idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	createMessageClient(messageClient: MessageClient): Observable<Boolean>{
		return this.http.post(this.getEspaceClientUrl + "/message", messageClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			)
	}

	createDemandeChequier(demandeChequier: DemandeChequier, idClient: number): Observable<Boolean>{
		return this.http.post(this.getEspaceClientUrl + "/demandechequier/" + idClient, demandeChequier)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			)
	}

	createDemandeRib(demandeRib: DemandeRib, idClient: number): Observable<Boolean>{
		return this.http.post(this.getEspaceClientUrl + "/demanderib/" + idClient, demandeRib)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			)
	}

	findClientById(idClient: number): Observable<Client> {
		return this.http.get(this.getEspaceClientUrl + "/" + idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}



}
