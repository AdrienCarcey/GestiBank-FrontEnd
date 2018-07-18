import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { DemandeInscription } from "../modeles/demande-inscription";

@Injectable()
export class EspaceAdminService {
	private getEspaceAdminUrl: string = "http://localhost:9090/GestiBankBackEnd/admin";

	constructor(private http: Http) {}

	findAllDemandes(idAdmin: number): Observable<Array<DemandeInscription>> {
		return this.http.get(this.getEspaceAdminUrl+"/demandes/"+idAdmin)
			.pipe(
				map((res:Response) => res.json()),
				catchError((error:any) => Observable.throw(error.json().error || "Server error"))
			);
	}
}
