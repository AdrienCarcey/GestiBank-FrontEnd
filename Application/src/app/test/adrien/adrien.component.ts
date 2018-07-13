import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

import { ClientTest } from "../../modeles/clientTest";
import { CompteTest } from "../../modeles/compteTest";
import { ClientTestService } from "../../services/clientTest.service";

@Component({
  selector: 'app-adrien',
  templateUrl: './adrien.component.html',
  styleUrls: ['./adrien.component.css'],
  providers: [ClientTestService]
})

export class AdrienComponent implements OnInit {
	clientsInterne = new Array<ClientTest>();
  clientInterne = new ClientTest();
  createClientInterne: boolean;
  deleteClientInterne: boolean;
  updateClientInterne: boolean;
  createCompteInterne: boolean;
  deleteCompteInterne: boolean;
  updateCompteInterne: boolean;

  buttonModifierClient: String;
  buttonAnnulerClient: String;
  buttonSupprimerClient: String;
  buttonEnregistrerClient: String;
  formCreationClient:String;

  clientForm = new FormGroup ({
    updateFirstName: new FormControl(),
    updateLastName: new FormControl(),
    updateEmail: new FormControl(),
    updateMobile: new FormControl(),

    createFirstName: new FormControl(),
    createLastName: new FormControl(),
    createEmail: new FormControl(),
    createMobile: new FormControl()
  })

  buttonModifierCompte: String;
  buttonAnnulerCompte: String;
  buttonSupprimerCompte: String;
  buttonEnregistrerCompte: String;
  formCreationCompte:String;

  compteForm = new FormGroup ({
    updateDescription: new FormControl(),
    updateSolde: new FormControl(),

    createIdClient: new FormControl(),
    createDescription: new FormControl(),
    createSolde: new FormControl()
  });
	
	constructor(private clientTestService: ClientTestService) {}

	ngOnInit() {
    this.buttonModifierClient = "visible";
    this.buttonAnnulerClient = "invisible";
    this.buttonSupprimerClient = "visible";
    this.buttonEnregistrerClient = "invisible";
    this.formCreationClient = "visible";

    this.clientForm.controls['updateFirstName'].disable();
    this.clientForm.controls['updateLastName'].disable();
    this.clientForm.controls['updateEmail'].disable();
    this.clientForm.controls['updateMobile'].disable();
    
    this.buttonModifierCompte = "visible";
    this.buttonAnnulerCompte = "invisible";
    this.buttonSupprimerCompte = "visible";
    this.buttonEnregistrerCompte = "invisible";
    this.formCreationCompte = "visible";
    
    this.compteForm.controls['updateDescription'].disable();
    this.compteForm.controls['updateSolde'].disable();

    this.clientTestService.findAllClients().subscribe(
        clientsResponse => {
          this.clientsInterne = clientsResponse;
        },
        error => {
          console.log(error);
        }
      );
	}

  findClient(idClient: number) {
    this.clientTestService.findClientById(idClient).subscribe(
        clientResponse => {
          this.clientInterne = clientResponse;
        },
        error => {
          console.log(error);
        }
      );
  }

  createClient() {
    let client = new ClientTest();
    client.firstName = this.clientForm.controls['createFirstName'].value;
    client.lastName = this.clientForm.controls['createLastName'].value;
    client.email = this.clientForm.controls['createEmail'].value;
    client.mobile = this.clientForm.controls['createMobile'].value;
    client.comptes = new Array<CompteTest>();

    this.clientTestService.createClient(client).subscribe(
        createResponse => {
          this.createClientInterne = createResponse;
        },
        error => {
          console.log(error);
        }
      );

    window.location.reload();
  }

  deleteClient(idClient: number) {
    this.clientTestService.deleteClientById(idClient).subscribe(
        deleteResponse => {
          this.deleteClientInterne = deleteResponse;
        },
        error => {
          console.log(error);
        }
      );

    window.location.reload();
  }

  updateClient(idClient: number) {
    let client = new ClientTest();
    client.firstName = this.clientForm.controls['updateFirstName'].value;
    client.lastName = this.clientForm.controls['updateLastName'].value;
    client.email = this.clientForm.controls['updateEmail'].value;
    client.mobile = this.clientForm.controls['updateMobile'].value;

    this.clientTestService.updateClient(idClient, client).subscribe(
       updateResponse => {
          this.updateClientInterne = updateResponse;
        },
        error => {
          console.log(error);
        }
      );

     window.location.reload();
  }

  createCompte() {
    let idClient: number;
    idClient = this.compteForm.controls['createIdClient'].value;

    let compte = new CompteTest();
    compte.description = this.compteForm.controls['createDescription'].value;
    compte.solde = this.compteForm.controls['createSolde'].value;

    this.clientTestService.createCompte(idClient, compte).subscribe(
        createResponse => {
          this.createCompteInterne = createResponse;
        },
        error => {
          console.log(error);
        }
      );

    window.location.reload();
  }

  deleteCompte(idCompte: number) {
    this.clientTestService.deleteCompteByIdCompte(idCompte).subscribe(
        deleteResponse => {
          this.deleteCompteInterne = deleteResponse;
        },
        error => {
          console.log(error);
        }
      );

    window.location.reload();
  }

  updateCompte(idCompte: number) {
    let compte = new CompteTest();
    compte.description = this.compteForm.controls['updateDescription'].value;
    compte.solde = this.compteForm.controls['updateSolde'].value;

    this.clientTestService.updateCompteById(idCompte, compte).subscribe(
        updateResponse => {
          this.updateCompteInterne = updateResponse;
        },
        error => {
          console.log(error);
        }
      );

    window.location.reload();
  }

  modifierClient() {
    this.buttonModifierClient = "invisible";
    this.buttonAnnulerClient = "visible";
    this.buttonSupprimerClient = "invisible";
    this.buttonEnregistrerClient = "visible";
    this.formCreationClient = "invisible";

    this.clientForm.controls['updateFirstName'].enable();
    this.clientForm.controls['updateLastName'].enable();
    this.clientForm.controls['updateEmail'].enable();
    this.clientForm.controls['updateMobile'].enable();
  }

  annulerClient() {
    this.buttonModifierClient = "visible";
    this.buttonAnnulerClient = "invisible";
    this.buttonSupprimerClient = "visible";
    this.buttonEnregistrerClient = "invisible";
    this.formCreationClient = "visible";

    this.clientForm.controls['updateFirstName'].disable();
    this.clientForm.controls['updateLastName'].disable();
    this.clientForm.controls['updateEmail'].disable();
    this.clientForm.controls['updateMobile'].disable();
  }

   modifierCompte() {
    this.buttonModifierCompte = "invisible";
    this.buttonAnnulerCompte = "visible";
    this.buttonSupprimerCompte = "invisible";
    this.buttonEnregistrerCompte = "visible";
    this.formCreationCompte = "invisible";
    
    this.compteForm.controls['updateDescription'].enable();
    this.compteForm.controls['updateSolde'].enable();
  }

  annulerCompte() {
    this.buttonModifierCompte = "visible";
    this.buttonAnnulerCompte = "invisible";
    this.buttonSupprimerCompte = "visible";
    this.buttonEnregistrerCompte = "invisible";
    this.formCreationCompte = "visible";
    
    this.compteForm.controls['updateDescription'].disable();
    this.compteForm.controls['updateSolde'].disable();
  }
}
