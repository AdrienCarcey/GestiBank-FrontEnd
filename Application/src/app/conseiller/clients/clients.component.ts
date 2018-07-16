import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

import { Client } from "../../modeles/client";
import { CompteCourantAvecDecouvert } from "../../modeles/compte-courant-avec-decouvert";
import { CompteCourantSansDecouvert } from "../../modeles/compte-courant-sans-decouvert";
import { CompteRemunerateur } from "../../modeles/compte-remunerateur";

import { EspaceConseillerService } from "../../services/espace-conseiller.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers: [EspaceConseillerService]
})

export class ClientsComponent implements OnInit {

clientsInterne = new Array<Client>();

	constructor(private espaceConseillerService: EspaceConseillerService) { }

	ngOnInit() {
		this.espaceConseillerService.findAllClients(2).subscribe(
        	clientsResponse => {
          		this.clientsInterne = clientsResponse;
        	},
        	error => {
          		console.log(error);
        	}
      	);
	}
}
