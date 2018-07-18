import { Component, OnInit } from '@angular/core';

import { Session } from "../../modeles/session";

import { SessionService } from "../../services/session.service";

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css'],
  providers: [SessionService]

})
export class EnteteComponent implements OnInit {

	session: Session;
	espace: String;
	espaceURL: String;
	connexion: String;
	deconnexion: String;

	constructor(private sessionService: SessionService) { }

	ngOnInit() {
		this.session = this.sessionService.getSession();

		if(this.session == null) {
			this.espace = 'invisible';
			this.espaceURL = null;
			this.connexion = 'visible';
			this.deconnexion = 'invisible';
		}

		else {
			this.espace = 'visible';
			this.espaceURL = "./"+this.sessionService.getSessionType();
			this.connexion = 'invisible';
			this.deconnexion = 'visible';
		}
	}

}
