import { Component, OnInit } from '@angular/core';

import { EspaceConseillerService } from "../../services/espace-conseiller.service";
import { SessionService } from "../../services/session.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    EspaceConseillerService,
    SessionService
  ]
})

export class DashboardComponent implements OnInit {
	idConseiller: number;

	dashboard = new Array<String>();

	constructor(
      private espaceConseillerService: EspaceConseillerService,
      private sessionService: SessionService
  	) { }

	ngOnInit() {
	  this.idConseiller = this.sessionService.getSessionId();

	  this.espaceConseillerService.dashboard(this.idConseiller).subscribe(
          dashboardResponse => {
            this.dashboard = dashboardResponse;
          },
          error => {
            console.log(error);
          }
        );
	}
}
