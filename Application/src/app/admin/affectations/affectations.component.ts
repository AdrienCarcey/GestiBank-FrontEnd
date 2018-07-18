import { Component, OnInit } from '@angular/core';

import { DemandeInscription } from "../../modeles/demande-inscription";

import { EspaceAdminService } from "../../services/espace-admin.service";
import { SessionService } from "../../services/session.service";

@Component({
  selector: 'app-affectations',
  templateUrl: './affectations.component.html',
  styleUrls: ['./affectations.component.css'],
  providers: [
  	EspaceAdminService,
  	SessionService
  ]
})
export class AffectationsComponent implements OnInit {
	idAdmin: number;

	demandes = new Array<DemandeInscription>();

	constructor(
      private espaceAdminService: EspaceAdminService,
      private sessionService: SessionService
  	) { }

	ngOnInit() {
		this.idAdmin = this.sessionService.getSessionId();

		this.espaceAdminService.findAllDemandes(this.idAdmin).subscribe(
          demandesResponse => {
            this.demandes = demandesResponse; 
          },
          error => {
            console.log(error);
          }
        );
	}
}
