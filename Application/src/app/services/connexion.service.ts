import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Session } from '../modeles/session'

@Injectable()
export class ConnexionService {
	private getConnexionUrl: string = "http://localhost:9090/GestiBankBackEnd/connexion";

	constructor(private http: Http) {}

	connexion(connexion: Array<string>): Observable<Session> {
		return this.http.post(this.getConnexionUrl, connexion)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

}
