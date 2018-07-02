import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Client } from "../modeles/client";

@Injectable()
export class ClientService {
	private getClientUrl: string = "http://localhost:8080/GestiBankBackEnd/clients";

	constructor(private http: Http) {}

	findClientById(id: number): Observable<Client> {
		return this.http.get(this.getClientUrl+"/"+id)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
}
