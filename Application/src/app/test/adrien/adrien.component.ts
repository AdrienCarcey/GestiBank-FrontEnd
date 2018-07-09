import { Component, OnInit } from '@angular/core';

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
	clientsTestInterne: ClientTest[];
  clientTestInterne: ClientTest = new ClientTest();
  deleteInterne: boolean;
  createInterne: boolean;
  updateInterne: boolean;
	
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
    var compte = new CompteTest();
    compte.description = "CCP";
    compte.dateCreation = null;
    compte.solde = 10000;
    var client = new ClientTest();
    client.firstName = "Sacha";
    client.lastName = "Lis";
    client.email = "sacha.lis@hotmail.fr";
    client.mobile = "07-07-07-07-07";
    client.dateOfBirth = null;
    client.comptes = [compte];


    this.clientTestService.createClient(client).subscribe(
        createResponse => {
          this.createInterne = createResponse;
        },
        error => {
          console.log(error);
        }
      );
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
  }
}
