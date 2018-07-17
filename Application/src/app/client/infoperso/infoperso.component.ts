import { Component, OnInit } from '@angular/core';
import { EspaceClientService } from '../../services/espace-client.service';
import { SessionService } from '../../services/session.service';
import { Client } from '../../modeles/client';

@Component({
  selector: 'app-infoperso',
  templateUrl: './infoperso.component.html',
  styleUrls: ['./infoperso.component.css'],
  providers: [EspaceClientService, SessionService]
})
export class InfopersoComponent implements OnInit {

	private client: Client;

  	constructor(private espaceClientService: EspaceClientService,
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

}
