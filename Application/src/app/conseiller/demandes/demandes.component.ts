import { Component, OnInit } from '@angular/core';

import { Client } from "../../modeles/client";

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

	clientInscription = new Client();
	demandeInscription: number;
	demandeInscriptionTable: String;
	demandeInscriptionAccepter: String;
	demandeInscriptionRefuser: String;

	clientBefore = new Client();
	clientAfter = new Client();
	demandeClient: number;
	demandeClientBefore = new Array<String>();
	demandeClientAfter = new Array<String>();
	demandeClientTable: String;
	demandeClientAccepter: String;
	demandeClientRefuser: String;

	demandeAccepterRefuser = new Array<String>();

	message = new Array<String>();
	messageTable: String;
	messageRepondre: String;

	validate: Boolean;
	refuse: Boolean;

	constructor(
      private espaceConseillerService: EspaceConseillerService,
      private sessionService: SessionService
  	) { }

	ngOnInit() {
		this.idConseiller = this.sessionService.getSessionId();

		this.demandeInscriptionTable = 'invisible';
		this.demandeClientTable = 'invisible';
		this.messageTable = 'invisible';

		this.espaceConseillerService.findAllDemandes(this.idConseiller).subscribe(
          demandesResponse => {
            this.demandesInscription = demandesResponse['demandeInscription'];
            this.demandesModificationDonnees = demandesResponse['demandeModificationDonnees'];
            
            this.demandesChequier = demandesResponse['demandeChequier'];

            if(this.demandesChequier != null) {
            	for(let demande of this.demandesChequier) {
	            	if(demande.statut == "demande non traitee") {
	            		this.demandeAccepterRefuser[demande.idDemande] = 'visible';
	            	}
	            	else {
	            		this.demandeAccepterRefuser[demande.idDemande]  = 'invisible';
	            	} 	
	            }
            }     

            this.demandesRib = demandesResponse['demandeRIB'];

            if(this.demandesRib != null) {
            	for(let demande of this.demandesRib) {
	            	if(demande.statut == "demande non traitee") {
	            		this.demandeAccepterRefuser[demande.idDemande] = 'visible';
	            	}
	            	else {
	            		this.demandeAccepterRefuser[demande.idDemande]  = 'invisible';
	            	} 	
            	}
            }

            this.demandesOuvertureCompte = demandesResponse['demandeOuvertureCompte'];

            if(this.demandesOuvertureCompte != null) {
            	for(let demande of this.demandesOuvertureCompte) {
	            	if(demande.statut == "demande non traitee") {
	            		this.demandeAccepterRefuser[demande.idDemande] = 'visible';
	            	}
	            	else {
	            		this.demandeAccepterRefuser[demande.idDemande]  = 'invisible';
	            	} 	
	            }
            }

            this.demandesFermetureCompte = demandesResponse['demandeFermetureCompte'];

            if(this.demandesFermetureCompte != null) {
            	for(let demande of this.demandesFermetureCompte) {
	            	if(demande.statut == "demande non traitee") {
	            		this.demandeAccepterRefuser[demande.idDemande] = 'visible';
	            	}
	            	else {
	            		this.demandeAccepterRefuser[demande.idDemande]  = 'invisible';
	            	} 	
	            }
            }

            this.messagesClient = demandesResponse['messageClient'];
            this.messagesPublic = demandesResponse['messagePublic'];
          },
          error => {
            console.log(error);
          }
        );
	}

	afficherDemandeInscription(idDemande: number) {
		this.demandeInscriptionTable = 'visible';
		this.demandeInscription = idDemande;

		for(let demande of this.demandesInscription) {
			if(demande.idDemande == idDemande) {
				this.clientInscription = demande.client;

				if(demande.statut == "demande non traitee") {
					this.demandeInscriptionAccepter = 'visible';
					this.demandeInscriptionRefuser = 'visible';
				}
				else {
					this.demandeInscriptionAccepter = 'invisible';
					this.demandeInscriptionRefuser = 'invisible';
				}		
			}
		}
	}

	afficherDemandeModificationDonnees(idDemande: number) {
		this.demandeClientTable = 'visible';
		this.demandeClient = idDemande;

		for(let demande of this.demandesModificationDonnees) {
			if(demande.idDemande == idDemande) {
				this.clientAfter = demande.client;

				this.espaceConseillerService.findClientByName(this.clientAfter.nomUtilisateur).subscribe(
			      clientResponse => {
			        this.clientBefore = clientResponse;
			      }, 
			      error => {
			        console.log(error);
			      }
			    );

				if(demande.statut == "demande non traitee") {
					this.demandeClientAccepter = 'visible';
					this.demandeClientRefuser = 'visible';
				}
				else {
					this.demandeClientAccepter = 'invisible';
					this.demandeClientRefuser = 'invisible';
				}		
			}
		}
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
		this.espaceConseillerService.validateDemande(idDemande, String(this.idConseiller)).subscribe(
          validateResponse => {
            this.validate = validateResponse; 
          },
          error => {
            console.log(error);
          }
        );

        window.location.reload();
	}

	refuserDemande(idDemande: number) {
		this.espaceConseillerService.refuseDemande(idDemande).subscribe(
          refuseResponse => {
            this.refuse = refuseResponse; 
          },
          error => {
            console.log(error);
          }
        );

        window.location.reload();
	}
}
