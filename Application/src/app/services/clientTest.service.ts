import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ClientTest } from "../modeles/clientTest";

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

	findClientById(id: number): Observable<ClientTest> {
		return this.http.get(this.getClientTestUrl+"/"+id)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	createClient(clientTest: ClientTest): Observable<boolean> {
		return this.http.post(this.getClientTestUrl, clientTest)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	deleteClientById(id: number): Observable<boolean> {
		return this.http.delete(this.getClientTestUrl+"/"+id)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	updateClient(id: number, clientTest: ClientTest): Observable<boolean> {
		return this.http.put(this.getClientTestUrl+"/"+id, clientTest)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
}
