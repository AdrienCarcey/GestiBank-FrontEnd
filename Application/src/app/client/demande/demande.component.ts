import { Component, OnInit } from '@angular/core';
import { EspaceClientService } from '../../services/espace-client.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { DemandeChequier } from '../../modeles/demande-chequier';
import { Client } from '../../modeles/client';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css'],
  providers: [EspaceClientService, SessionService]  
})

export class DemandeComponent implements OnInit {

	private client: Client;
  	constructor(private espaceClientService: EspaceClientService, 
  		private router: Router,
  		private sessionService: SessionService) { }

  	ngOnInit() {
		let idClient: number;
    	idClient = this.sessionService.getSessionId();
  	  	this.espaceClientService.findClientById(idClient).subscribe(
  	  		clientResponse => {
  	  			this.client = clientResponse;
  	  		}
    	)

  	}


  	createDemandeChequier(){
  		let demandeChequier = new DemandeChequier();
  		demandeChequier.dateDemande = new Date();
  		demandeChequier.statut = "demande non traitee";
  	}	 

}
