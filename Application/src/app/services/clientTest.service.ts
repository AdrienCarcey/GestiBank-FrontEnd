import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ClientTest } from "../modeles/clientTest";
import { CompteTest } from "../modeles/compteTest";

@Injectable()
export class ClientTestService {
	private getClientTestUrl: string = "http://localhost:9090/GestiBankBackEnd/clientsTest";

	constructor(private http: Http) {}

	findAllClients(): Observable<ClientTest[]> {
		return this.http.get(this.getClientTestUrl)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findClientById(idClient: number): Observable<ClientTest> {
		return this.http.get(this.getClientTestUrl+"/"+idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	createClient(client: ClientTest): Observable<boolean> {
		return this.http.post(this.getClientTestUrl, client)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	deleteClientById(idClient: number): Observable<boolean> {
		return this.http.delete(this.getClientTestUrl+"/"+idClient)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	updateClient(idClient: number, client: ClientTest): Observable<boolean> {
		return this.http.put(this.getClientTestUrl+"/"+idClient, client)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	createCompte(idClient:number, compte: CompteTest): Observable<boolean> {
		return this.http.post(this.getClientTestUrl+"/compte"+"/"+idClient, compte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	deleteCompteByIdCompte(idCompte: number): Observable<boolean> {
		return this.http.delete(this.getClientTestUrl+"/compte"+"/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	deleteCompteByIdClient(idClient: number, idCompte: number): Observable<boolean> {
		return this.http.delete(this.getClientTestUrl+"/compte"+"/"+idClient+"/"+idCompte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	updateCompteById(idCompte: number, compte: CompteTest): Observable<boolean> {
		return this.http.put(this.getClientTestUrl+"/compte"+"/"+idCompte, compte)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
}
