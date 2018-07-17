import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { OperationBancaire } from "../modeles/operation-bancaire";
import { Compte } from "../modeles/compte";


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


}
