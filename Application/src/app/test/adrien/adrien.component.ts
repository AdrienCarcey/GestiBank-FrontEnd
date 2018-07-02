import { Component, OnInit } from '@angular/core';

import { Client } from "../../modeles/client";
import { ClientService } from "../../services/client.service";

@Component({
  selector: 'app-adrien',
  templateUrl: './adrien.component.html',
  styleUrls: ['./adrien.component.css'],
  providers: [ClientService]
})

export class AdrienComponent implements OnInit {
	clientInterne: Client;
	
	constructor(private clientService: ClientService) {}

	ngOnInit() {
		this.clientService.findClientById(20).subscribe(
  			clientReponse => {
  				this.clientInterne = clientReponse;
  			},
  			error => {
  				console.log(error);
  			}
  		);
	}
}
