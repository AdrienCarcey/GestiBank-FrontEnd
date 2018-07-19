import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Conseiller } from "../modeles/conseiller";
import { DemandeInscription } from "../modeles/demande-inscription";

@Injectable()
export class EspaceAdminService {
	private getEspaceAdminUrl: string = "http://localhost:9090/GestiBankBackEnd/admin";

	constructor(private http: Http) {}

	findAllConseillers(idAdmin: number): Observable<Array<Conseiller>> {
		return this.http.get(this.getEspaceAdminUrl+"/conseillers/"+idAdmin)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	findAllDemandes(idAdmin: number): Observable<Array<DemandeInscription>> {
		return this.http.get(this.getEspaceAdminUrl+"/demandes/"+idAdmin)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	affectDemandeInscription(affectation: Array<number>): Observable<Boolean> {
		return this.http.post(this.getEspaceAdminUrl+"/demandes/", affectation)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}

	dashboard(idAdmin: number): Observable<Array<String>> {
		return this.http.get(this.getEspaceAdminUrl+"/dashboard/"+idAdmin)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
}
