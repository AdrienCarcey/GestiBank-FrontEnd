import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

import { Client } from "../../modeles/client";
import { Compte } from "../../modeles/compte";
import { OperationBancaire } from "../../modeles/operation-bancaire";
import { Identite } from "../../modeles/identite";
import { SituationFamiliale } from "../../modeles/situation-familiale";
import { Contact } from "../../modeles/contact";
import { Adresse } from "../../modeles/adresse";
import { Documents } from "../../modeles/documents";

import { EspaceConseillerService } from "../../services/espace-conseiller.service";
import { SessionService } from "../../services/session.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [
    EspaceConseillerService,
    SessionService
  ]
})

export class ClientsComponent implements OnInit {
  idConseiller: number;

  clients = new Array<Client>();
  client = new Client();
  comptes = new Array<Array<String>>();
  openClient: Boolean;
  closeClient: Boolean;
  updateClient: Boolean;

  operationsBancaires = new Array<OperationBancaire>();
  openCompte: Boolean;
  closeCompte: Boolean;

  clientForm = new FormGroup ({
    titreCivilite: new FormControl(),
    nom: new FormControl(),
    prenom: new FormControl(),
    dateNaissance: new FormControl(),

    situationMatrimoniale: new FormControl(),
    nombreEnfants: new FormControl(),

    numeroVoie: new FormControl(),
    libelleVoie: new FormControl(),
    complementAdresse: new FormControl(),
    codePostal: new FormControl(),
    ville: new FormControl(),
    pays: new FormControl(),
    telephone: new FormControl(),
    email: new FormControl(),

    pieceIdentite: new FormControl(),
    justificatifDomicile: new FormControl()
  });


  buttonAfficherClient = new Array<String>();
  buttonOuvrirClient = new Array<String>();
  buttonFermerClient = new Array<String>();
  detailClient: String;
  buttonModifierClient: String;
  buttonAnnulerClient: String;
  buttonEnregistrerClient: String;

  buttonAfficherCompte = new Array<String>();
  buttonOuvrirCompte = new Array<String>();
  buttonFermerCompte = new Array<String>();
  detailCompte: String;

	constructor(
    private espaceConseillerService: EspaceConseillerService,
    private sessionService: SessionService
  ) { }

	ngOnInit() {
    this.idConseiller = this.sessionService.getSessionId();

    this.detailClient = 'invisible';
    this.detailCompte = 'invisible';

    this.espaceConseillerService.findAllClients(this.idConseiller).subscribe(
      clientsResponse => {
        this.clients = clientsResponse;

        for(let client of this.clients) {
          if(client.statut == "ouvert") {
            this.buttonAfficherClient[client.idUtilisateur] = 'visible';
            this.buttonOuvrirClient[client.idUtilisateur] = 'invisible';
            this.buttonFermerClient[client.idUtilisateur] = 'visible';
          }
          
          else {
            this.buttonAfficherClient[client.idUtilisateur] = 'invisible';
            this.buttonOuvrirClient[client.idUtilisateur] = 'visible';
            this.buttonFermerClient[client.idUtilisateur] = 'invisible';
          }
        }
      },
      error => {
        console.log(error);
      }
    );
	}

  findClientAccount(idClient: number) {
    this.clientForm.disable();

    this.buttonModifierClient = 'visible';
    this.buttonAnnulerClient = 'invisible';
    this.buttonEnregistrerClient = 'invisible';

    this.detailClient = 'visible';

    this.espaceConseillerService.findClientAccount(idClient).subscribe(
      clientResponse => {
        this.client = clientResponse;

        for(let compte of this.client.comptes) {
          if(compte.statut) {
            this.buttonAfficherCompte[compte.idCompte] = 'visible';
            this.buttonOuvrirCompte[compte.idCompte] = 'invisible';
            this.buttonFermerCompte[compte.idCompte] = 'visible';
          }
          
          else {
            this.buttonAfficherCompte[compte.idCompte] = 'invisible';
            this.buttonOuvrirCompte[compte.idCompte] = 'visible';
            this.buttonFermerCompte[compte.idCompte] = 'invisible';
          }
        }

        let i = 0;

        for(let compte of this.client.comptes) {
          let comptetmp = new Array<String>();

          comptetmp['idCompte'] = compte.idCompte;
          
          if(compte.statut) {
            comptetmp['statut'] = 'ouvert';
            comptetmp['solde'] = compte.solde;
          }
          else {
            comptetmp['statut'] = 'fermé';
            comptetmp['solde'] = '-';
          }

          if(i == 0){
            comptetmp['type'] = 'Compte Courant Sans Découvert';
          }
          else if(i == 1){
            comptetmp['type'] = 'Compte Courant Avec Découvert';
          }
          else if(i == 2){
            comptetmp['type'] = 'Compte Rémunérateur';
          }

          this.comptes[compte.idCompte] = comptetmp;

          i++;
        }
      },
      error => {
        
      }
    );
  }

  openClientAccount(idClient: number) {
    this.espaceConseillerService.openClientAccount(idClient).subscribe(
      openClientResponse => {
        this.openClient = openClientResponse;
      },
      error => {
        console.log(error);
      }
    );

    window.location.reload();
  }

  closeClientAccount(idClient: number) {
    this.espaceConseillerService.closeClientAccount(idClient).subscribe(
      closeClientResponse => {
        this.closeClient = closeClientResponse;
      },
      error => {
        console.log(error);
      }
    );

    window.location.reload();
  }

  updateClientAccount(idClient: number) {
    let client = new Client();
    
    let identite = new Identite;
    identite.titreCivilite = this.clientForm.controls['titreCivilite'].value;
    identite.nom = this.clientForm.controls['nom'].value;
    identite.prenom = this.clientForm.controls['prenom'].value;
    identite.dateNaissance = this.clientForm.controls['dateNaissance'].value;
    client.identite = identite;

    let situationFamiliale = new SituationFamiliale;
    situationFamiliale.situationMatrimoniale = this.clientForm.controls['situationMatrimoniale'].value;
    situationFamiliale.nombreEnfants = this.clientForm.controls['nombreEnfants'].value;
    client.situationFamiliale = situationFamiliale;

    let contact = new Contact;
    let adresse = new Adresse;
    adresse.numeroVoie = this.clientForm.controls['numeroVoie'].value;
    adresse.libelleVoie = this.clientForm.controls['libelleVoie'].value;
    adresse.complementAdresse = this.clientForm.controls['complementAdresse'].value;
    adresse.codePostal = this.clientForm.controls['codePostal'].value;
    adresse.ville = this.clientForm.controls['ville'].value;
    adresse.pays = this.clientForm.controls['pays'].value;
    contact.adresse = adresse;
    contact.telephone = this.clientForm.controls['telephone'].value;
    contact.email = this.clientForm.controls['email'].value;
    client.contact = contact;

    let documents = new Documents;
    documents.pieceIdentite = this.clientForm.controls['pieceIdentite'].value;
    documents.justificatifDomicile = this.clientForm.controls['justificatifDomicile'].value;
    client.documents = documents;

    this.espaceConseillerService.updateClientAccount(idClient, client).subscribe(
      updateClientResponse => {
        this.updateClient = updateClientResponse;
      },
      error => {
        console.log(error);
      }
    );

    window.location.reload();
  }

  modifierClient() {
    this.clientForm.enable();

    this.buttonModifierClient = 'invisible';
    this.buttonAnnulerClient = 'visible';
    this.buttonEnregistrerClient = 'visible';
  }

  annulerClient() {
    this.clientForm.disable();

    this.buttonModifierClient = 'visible';
    this.buttonAnnulerClient = 'invisible';
    this.buttonEnregistrerClient = 'invisible';
  }
  
  findCompteOperation(idCompte: number) {
    this.detailCompte = 'visible';

    this.espaceConseillerService.findCompteOperation(idCompte).subscribe(
      operationResponse => {
         this.operationsBancaires = operationResponse;
      },
      error => {
        console.log(error);
      }
    );
  }

  openClientCompte(idCompte: number) {
    this.espaceConseillerService.openClientCompte(idCompte).subscribe(
      openCompteResponse => {
        this.openCompte = openCompteResponse;
      },
      error => {
        console.log(error);
      }
    );

    window.location.reload();
  }

  closeClientCompte(idCompte: number) {
    this.espaceConseillerService.closeClientCompte(idCompte).subscribe(
      closeCompteResponse => {
        this.closeCompte = closeCompteResponse;
      },
      error => {
        console.log(error);
      }
    );

    window.location.reload();
  }
}
