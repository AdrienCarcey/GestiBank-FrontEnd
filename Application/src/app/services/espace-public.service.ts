import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { DemandeInscription } from '../modeles/demande-inscription';
import { map, catchError } from "rxjs/operators";


@Injectable()
export class EspacePublicService {

	private getConnexionUrl: string = "http://localhost:9090/GestiBankBackEnd/public/adhesion";

	constructor(private http: Http) {}

	adhesion(demandeInscription: DemandeInscription): Observable<boolean> {
		return this.http.post(this.getConnexionUrl, demandeInscription)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
	
}
