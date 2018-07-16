import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Client } from "../modeles/client";
import { CompteCourantAvecDecouvert } from "../modeles/compte-courant-avec-decouvert";
import { CompteCourantSansDecouvert } from "../modeles/compte-courant-sans-decouvert";
import { CompteRemunerateur } from "../modeles/compte-remunerateur";

@Injectable()
export class EspaceConseillerService {
	private getEspaceConseillerUrl: string = "http://localhost:9090/GestiBankBackEnd/conseiller";

	constructor(private http: Http) {}

	findAllClients(idConseiller: number): Observable<Array<Client>> {
		return this.http.post(this.getEspaceConseillerUrl, idConseiller)
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

	closeClientAccount(idClient: number): Observable<Boolean> {
		return this.http.delete(this.getEspaceConseillerUrl+"/clients/"+idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	openClientCompte(idCompte: number): Observable<Boolean> {
		return this.http.get(this.getEspaceConseillerUrl+"/comptes/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	closeClientCompte(idCompte: number): Observable<Boolean> {
		return this.http.delete(this.getEspaceConseillerUrl+"/comptes/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
}
