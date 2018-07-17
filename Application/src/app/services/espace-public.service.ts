import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { DemandeInscription } from '../modeles/demande-inscription';
import { map, catchError } from "rxjs/operators";
import { MessagePublic } from '../modeles/message-public';
import { Session } from '../modeles/session'

@Injectable()
export class EspacePublicService {

	private getConnexionUrl: string = "http://localhost:9090/GestiBankBackEnd/public";

	constructor(private http: Http) {}

	demandeInscription(demandeInscription: DemandeInscription): Observable<boolean> {
		return this.http.post(this.getConnexionUrl + "/adhesion", demandeInscription)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}


	createMessagePublic(messagePublic: MessagePublic): Observable<boolean> {
		return this.http.post(this.getConnexionUrl + "/message", messagePublic)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}


	connexion(connexion: Array<string>): Observable<Session> {
		return this.http.post(this.getConnexionUrl + "/connexion", connexion)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
	
}
