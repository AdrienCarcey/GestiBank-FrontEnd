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

  clientForm = new FormGroup ({
    createFirstName: new FormControl(),
    createLastName: new FormControl(),
    createEmail: new FormControl(),
    createMobile: new FormControl()
  });

  buttonModifierClient = {};
  buttonAnnulerClient = {};
  buttonSupprimerClient = {};
  buttonEnregistrerClient = {};
  formCreationClient: string;

  compteForm = new FormGroup ({
    createIdClient: new FormControl(),
    createDescription: new FormControl(),
    createSolde: new FormControl()
  });

  buttonModifierCompte = {};
  buttonAnnulerCompte = {};
  buttonSupprimerCompte = {};
  buttonEnregistrerCompte = {};
  formCreationCompte: string;
	
	constructor(private clientTestService: ClientTestService) {}

	ngOnInit() {
    this.clientTestService.findAllClients().subscribe(
        clientsResponse => {
          this.clientsInterne = clientsResponse;

          for(let client of this.clientsInterne) {
            this.clientForm.addControl('updateFirstName'+client.idClient, new FormControl());
            this.clientForm.addControl('updateLastName'+client.idClient, new FormControl());
            this.clientForm.addControl('updateEmail'+client.idClient, new FormControl());
            this.clientForm.addControl('updateMobile'+client.idClient, new FormControl());

            this.clientForm.controls['updateFirstName'+client.idClient].disable();
            this.clientForm.controls['updateLastName'+client.idClient].disable();
            this.clientForm.controls['updateEmail'+client.idClient].disable();
            this.clientForm.controls['updateMobile'+client.idClient].disable();

            this.buttonModifierClient[client.idClient]='visible';
            this.buttonAnnulerClient[client.idClient]='invisible';
            this.buttonSupprimerClient[client.idClient]='visible';
            this.buttonEnregistrerClient[client.idClient]='invisible';
          }
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

          for(let compte of this.clientInterne.comptes) {
            this.compteForm.addControl('updateDescription'+compte.idCompte, new FormControl());
            this.compteForm.addControl('updateSolde'+compte.idCompte, new FormControl());

            this.compteForm.controls['updateDescription'+compte.idCompte].disable();
            this.compteForm.controls['updateSolde'+compte.idCompte].disable();

            this.buttonModifierCompte[compte.idCompte]='visible';
            this.buttonAnnulerCompte[compte.idCompte]='invisible';
            this.buttonSupprimerCompte[compte.idCompte]='visible';
            this.buttonEnregistrerCompte[compte.idCompte]='invisible';
          }
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
    client.firstName = this.clientForm.controls['updateFirstName'+idClient].value;
    client.lastName = this.clientForm.controls['updateLastName'+idClient].value;
    client.email = this.clientForm.controls['updateEmail'+idClient].value;
    client.mobile = this.clientForm.controls['updateMobile'+idClient].value;

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

  deleteCompte(idClient: number, idCompte: number) {
    this.clientTestService.deleteCompteByIdClient(idClient, idCompte).subscribe(
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
    compte.description = this.compteForm.controls['updateDescription'+idCompte].value;
    compte.solde = this.compteForm.controls['updateSolde'+idCompte].value;

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

  modifierClient(idClient: number) {
    this.buttonModifierClient[idClient] = 'invisible';
    this.buttonAnnulerClient[idClient] = 'visible';
    this.buttonSupprimerClient[idClient] = 'invisible';
    this.buttonEnregistrerClient[idClient] = 'visible';
    this.formCreationClient = 'invisible';

    this.clientForm.controls['updateFirstName'+idClient].enable();
    this.clientForm.controls['updateLastName'+idClient].enable();
    this.clientForm.controls['updateEmail'+idClient].enable();
    this.clientForm.controls['updateMobile'+idClient].enable();
  }

  annulerClient(idClient: number) {
    this.buttonModifierClient[idClient] = 'visible';
    this.buttonAnnulerClient[idClient] = 'invisible';
    this.buttonSupprimerClient[idClient] = 'visible';
    this.buttonEnregistrerClient[idClient] = 'invisible';
    this.formCreationClient = 'visible';

    this.clientForm.controls['updateFirstName'+idClient].disable();
    this.clientForm.controls['updateLastName'+idClient].disable();
    this.clientForm.controls['updateEmail'+idClient].disable();
    this.clientForm.controls['updateMobile'+idClient].disable();
  }

   modifierCompte(idCompte: number) {
    this.buttonModifierCompte[idCompte] = 'invisible';
    this.buttonAnnulerCompte[idCompte] = 'visible';
    this.buttonSupprimerCompte[idCompte] = 'invisible';
    this.buttonEnregistrerCompte[idCompte] = 'visible';
    this.formCreationCompte = 'invisible';
    
    this.compteForm.controls['updateDescription'+idCompte].enable();
    this.compteForm.controls['updateSolde'+idCompte].enable();
  }

  annulerCompte(idCompte: number) {
    this.buttonModifierCompte[idCompte] = 'visible';
    this.buttonAnnulerCompte[idCompte] = 'invisible';
    this.buttonSupprimerCompte[idCompte] = 'visible';
    this.buttonEnregistrerCompte[idCompte] = 'invisible';
    this.formCreationCompte = 'visible';
    
    this.compteForm.controls['updateDescription'+idCompte].disable();
    this.compteForm.controls['updateSolde'+idCompte].disable();
  }
}
