import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

import { DemandeInscription } from "../../modeles/demande-inscription";
import { DemandeModificationDonnees } from "../../modeles/demande-modification-donnees";
import { DemandeChequier } from "../../modeles/demande-chequier";
import { DemandeRib } from "../../modeles/demande-rib";
import { DemandeOuvertureCompte } from "../../modeles/demande-ouverture-compte";
import { DemandeFermetureCompte } from "../../modeles/demande-fermeture-compte";

import { MessageClient } from "../../modeles/message-client";
import { MessagePublic } from "../../modeles/message-public";

import { EspaceConseillerService } from "../../services/espace-conseiller.service";
import { SessionService } from "../../services/session.service";

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css'],
  providers: [
    EspaceConseillerService,
    SessionService
  ]
})

export class DemandesComponent implements OnInit {
	idConseiller: number;

	demandeInscription = new Array<DemandeInscription>();
	demandeModificationDonnees = new Array<DemandeModificationDonnees>();
	demandeChequier = new Array<DemandeChequier>();
	demandeRib = new Array<DemandeRib>();
	demandeOuvertureCompte = new Array<DemandeOuvertureCompte>();
	demandeFermetureCompte = new Array<DemandeFermetureCompte>();
	messageClient = new Array<MessageClient>();
	messagePublic = new Array<MessagePublic>();

	constructor(
      private espaceConseillerService: EspaceConseillerService,
      private sessionService: SessionService
  	) { }

	ngOnInit() {
		this.idConseiller = this.sessionService.getSessionId();

		this.espaceConseillerService.findAllDemandes(this.idConseiller).subscribe(
          demandesResponse => {
            this.demandeInscription = demandesResponse['demandeInscription'];
            this.demandeModificationDonnees = demandesResponse['demandeModificationDonnees'];
            this.demandeChequier = demandesResponse['demandeChequier'];
            this.demandeRib = demandesResponse['demandeRib'];
            this.demandeOuvertureCompte = demandesResponse['demandeOuvertureCompte'];
            this.demandeFermetureCompte = demandesResponse['demandeFermetureCompte'];
            this.messageClient = demandesResponse['messageClient'];
            this.messagePublic = demandesResponse['messagePublic'];
          },
          error => {
            console.log(error);
          }
        );
	}

	afficherDemandeInscription(idDemande: number) {

	}

	afficherDemandeModificationDonnee(idDemande: number) {
		
	}

	afficherDemandeChequier(idDemande: number) {
		
	}

	afficherDemandeRib(idDemande: number) {
		
	}

	afficherDemandeOuvertureCompte(idDemande: number) {
		
	}

	afficherdemandeFermetureCompte(idDemande: number) {
		
	}

	afficherMessageClient(idDemande: number) {
		
	}

	afficherMessagePublic(idDemande: number) {
		
	}

}
