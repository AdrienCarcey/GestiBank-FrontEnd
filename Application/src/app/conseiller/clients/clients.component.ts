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

  buttonModifierClient: string;
  buttonAnnulerClient: string;
  buttonEnregistrerClient: string;

	constructor(
    private espaceConseillerService: EspaceConseillerService,
    private sessionService: SessionService
  ) { }

	ngOnInit() {
    this.idConseiller = this.sessionService.getSessionId();

    this.espaceConseillerService.findAllClients(this.idConseiller).subscribe(
      clientsResponse => {
        this.clients = clientsResponse;
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

    this.espaceConseillerService.findClientAccount(idClient).subscribe(
      clientResponse => {
        this.client = clientResponse;
      },
      error => {
        console.log(error);
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
