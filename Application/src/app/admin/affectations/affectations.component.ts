import { Component, OnInit } from '@angular/core';

import { Client } from "../../modeles/client";
import { Conseiller } from "../../modeles/conseiller";
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

	demandesInscription = new Array<DemandeInscription>();
  clientInscription = new Client();
  conseillers = new Array<Conseiller>();
  affectation: Boolean;
  
  demandeInscriptionTable: String;
  demandeInscriptionDetail: String;
  demandeInscriptionAffecter: String;
  demandeInscription: number;
  
	constructor(
      private espaceAdminService: EspaceAdminService,
      private sessionService: SessionService
  	) { }

	ngOnInit() {
		this.idAdmin = this.sessionService.getSessionId();

    this.demandeInscriptionTable = 'visible';
    this.demandeInscriptionDetail = 'invisible';
    this.demandeInscriptionAffecter = 'invisible';

		this.espaceAdminService.findAllDemandes(this.idAdmin).subscribe(
          demandesResponse => {
            this.demandesInscription = demandesResponse;

            if(this.demandesInscription.length == 0) {
              this.demandeInscriptionTable = 'invisible';
            }

          },
          error => {
            console.log(error);
          }
    );
	}

  afficherDemandeInscription(idDemande: number) {
    this.demandeInscription = idDemande;
    this.demandeInscriptionDetail = 'visible';
    this.demandeInscriptionAffecter = 'visible';

    for(let demande of this.demandesInscription) {
      if(demande.idDemande == idDemande) {
        this.clientInscription = demande.client;
      }
    }

    this.espaceAdminService.findAllConseillers(this.idAdmin).subscribe(
          conseillersResponse => {
            this.conseillers = conseillersResponse; 
          },
          error => {
            console.log(error);
          }
    );
  }

  affecterDemandeInscription(idDemande: number, idConseiller: number) {
    let affectationDemande = new Array<number>();

    affectationDemande.push(idDemande);
    affectationDemande.push(this.idAdmin);
    affectationDemande.push(idConseiller);

    this.espaceAdminService.affectDemandeInscription(affectationDemande).subscribe(
          affectationResponse => {
            this.affectation = affectationResponse; 
          },
          error => {
            console.log(error);
          }
    );

    window.location.reload();
  }
}
