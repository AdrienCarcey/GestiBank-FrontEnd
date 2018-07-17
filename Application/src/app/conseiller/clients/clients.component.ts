import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

import { Client } from "../../modeles/client";
import { Compte } from "../../modeles/compte";
import { CompteCourantAvecDecouvert } from "../../modeles/compte-courant-avec-decouvert";
import { CompteCourantSansDecouvert } from "../../modeles/compte-courant-sans-decouvert";
import { CompteRemunerateur } from "../../modeles/compte-remunerateur";
import { OperationBancaire } from "../../modeles/operation-bancaire";
import { OperationCredit } from "../../modeles/operation-credit";
import { OperationDebit } from "../../modeles/operation-debit";

import { EspaceConseillerService } from "../../services/espace-conseiller.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [EspaceConseillerService]
})

export class ClientsComponent implements OnInit {

  clients = new Array<Client>();
  client = new Client();
  openClient: Boolean;
  closeClient: Boolean;

  compte: Compte;
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

	constructor(private espaceConseillerService: EspaceConseillerService) { }

	ngOnInit() {
    this.espaceConseillerService.findAllClients(2).subscribe(
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
  
  findClientCompte(idCompte: number) {
    this.espaceConseillerService.findClientCompte(idCompte).subscribe(
      compteResponse => {
        if(compteResponse instanceof CompteCourantAvecDecouvert) {
          this.compte = new CompteCourantAvecDecouvert();
          this.compte = compteResponse;
        }
        
        else if(compteResponse instanceof CompteCourantSansDecouvert) {
          this.compte = new CompteCourantSansDecouvert();
          this.compte = compteResponse;
        }
        
        else if(compteResponse instanceof CompteRemunerateur) {
          this.compte = new CompteRemunerateur();
          this.compte = compteResponse;
        }
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
