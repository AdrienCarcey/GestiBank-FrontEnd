import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";


@Injectable()
export class ConnexionTestService {
	private getConnexionTestUrl: string = "http://localhost:9090/GestiBankBackEnd/connexionTest";

	constructor(private http: Http) {}

	connexion(connexion: Array<string>): Observable<Array<any>> {
		return this.http.post(this.getConnexionTestUrl, connexion)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}




//	connexion(utilisateur: string, mdp: string): Observable<string> {
//		return this.http.get(this.getConnexionTestUrl)
//			.pipe(
//				map((res:Response) => res.json()),
//				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
//			);
//	}
}
