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
	clientsTestInterne: Array<ClientTest>;
  clientTestInterne: ClientTest = new ClientTest();
  deleteInterne: boolean;
  createInterne: boolean;
  updateInterne: boolean;

  clientForm = new FormGroup ({
    updateFirstName: new FormControl(),
    updateLastName: new FormControl(),
    updateDateOfBirth: new FormControl(),
    updateEmail: new FormControl(),
    updateMobile: new FormControl(),

    createFirstName: new FormControl(),
    createLastName: new FormControl(),
    createDateOfBirth: new FormControl(),
    createEmail: new FormControl(),
    createMobile: new FormControl()
  });

  compteForm = new FormGroup ({
    createIdClient: new FormControl(),
    createDescription: new FormControl(),
    createDateCreation: new FormControl(),
    createSolde: new FormControl()
  });
	
	constructor(private clientTestService: ClientTestService) {}

	ngOnInit() {
    this.clientTestService.findAllClients().subscribe(
        clientsTestResponse => {
          this.clientsTestInterne = clientsTestResponse;
        },
        error => {
          console.log(error);
        }
      );
	}

  findClient(id: number) {
    this.clientTestService.findClientById(id).subscribe(
        clientTestResponse => {
          this.clientTestInterne = clientTestResponse;
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
    client.dateOfBirth = null;
    client.email = this.clientForm.controls['createEmail'].value;
    client.mobile = this.clientForm.controls['createMobile'].value;


    this.clientTestService.createClient(client).subscribe(
        createResponse => {
          this.createInterne = createResponse;
        },
        error => {
          console.log(error);
        }
      );

    window.location.reload();
  }

  deleteClient(id: number) {
    this.clientTestService.deleteClientById(id).subscribe(
        deleteResponse => {
          this.deleteInterne = deleteResponse;
        },
        error => {
          console.log(error);
        }
      );

    window.location.reload();
  }

  updateClient(id: number) {
    let compte = new CompteTest();
    compte.description = "CCP";
    compte.dateCreation = null;
    compte.solde = 10000;
   
    let client = new ClientTest();
    client.idClient = id;
    client.firstName = this.clientForm.controls['updateFirstName'].value;
    client.lastName = this.clientForm.controls['updateLastName'].value;
    client.dateOfBirth = null;
    client.email = this.clientForm.controls['updateEmail'].value;
    client.mobile = this.clientForm.controls['updateMobile'].value;
    client.comptes = [compte];

    this.clientTestService.updateClient(id, client).subscribe(
       updateResponse => {
          this.updateInterne = updateResponse;
        },
        error => {
          console.log(error);
        }
      );

     window.location.reload();
  }

  deleteCompte(id: number) {
    window.location.reload();
  }

  createCompte() {
    window.location.reload();
  }
}
