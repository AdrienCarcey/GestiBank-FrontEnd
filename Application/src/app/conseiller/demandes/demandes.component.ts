import { Component, OnInit } from '@angular/core';

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

	demandesInscription = new Array<DemandeInscription>();
	demandesModificationDonnees = new Array<DemandeModificationDonnees>();
	demandesChequier = new Array<DemandeChequier>();
	demandesRib = new Array<DemandeRib>();
	demandesOuvertureCompte = new Array<DemandeOuvertureCompte>();
	demandesFermetureCompte = new Array<DemandeFermetureCompte>();
	messagesClient = new Array<MessageClient>();
	messagesPublic = new Array<MessagePublic>();

	message = new Array<String>();
	messageTable: String;
	messageRepondre: String;

	validate: Boolean;

	constructor(
      private espaceConseillerService: EspaceConseillerService,
      private sessionService: SessionService
  	) { }

	ngOnInit() {
		this.idConseiller = this.sessionService.getSessionId();

		this.messageTable = 'invisible';

		this.espaceConseillerService.findAllDemandes(this.idConseiller).subscribe(
          demandesResponse => {
            this.demandesInscription = demandesResponse['demandeInscription'];
            this.demandesModificationDonnees = demandesResponse['demandeModificationDonnees'];
            this.demandesChequier = demandesResponse['demandeChequier'];
            this.demandesRib = demandesResponse['demandeRib'];
            this.demandesOuvertureCompte = demandesResponse['demandeOuvertureCompte'];
            this.demandesFermetureCompte = demandesResponse['demandeFermetureCompte'];
            this.messagesClient = demandesResponse['messageClient'];
            this.messagesPublic = demandesResponse['messagePublic'];
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
		this.messageTable = 'visible';

		for(let message of this.messagesClient) {
			if(message.idDemande == idDemande) {
				this.message['idDemande'] = message.idDemande;
				this.message['idClient'] = message.idClient;
				this.message['titreCivilite'] = '-';
				this.message['nom'] = '-';
				this.message['prenom'] = '-';
				this.message['email'] = '-';
				this.message['sujet'] = message.sujet;
				this.message['message'] = message.message;

				if(message.statut == "message non repondu") {
					this.messageRepondre = 'visible';
				}
				else {
					this.messageRepondre = 'invisible';
				}		
			}
		}
	}

	afficherMessagePublic(idDemande: number) {
		this.messageTable = 'visible';

		for(let message of this.messagesPublic) {
			if(message.idDemande == idDemande) {
				this.message['idDemande'] = message.idDemande;
				this.message['idClient'] = '-';
				this.message['titreCivilite'] = message.titreCivilite;
				this.message['nom'] = message.nom;
				this.message['prenom'] = message.prenom;
				this.message['email'] = message.email;
				this.message['sujet'] = message.sujet;
				this.message['message'] = message.message;
			}

			if(message.statut == "message non repondu") {
					this.messageRepondre = 'visible';
				}
			else {
				this.messageRepondre = 'invisible';
			}
		}
	}

	accepterDemande(idDemande: number) {
		this.espaceConseillerService.validateDemande(idDemande, this.idConseiller).subscribe(
          validateResponse => {
            this.validate = validateResponse; 
          },
          error => {
            console.log(error);
          }
        );

        window.location.reload();
	}
}
