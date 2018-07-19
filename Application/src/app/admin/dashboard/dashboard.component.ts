import { Component, OnInit } from '@angular/core';

import { EspaceAdminService } from "../../services/espace-admin.service";
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    EspaceAdminService,
    SessionService
  ]
})
export class DashboardComponent implements OnInit {

  	idAdmin: number;

    dashboard = new Array<String>();

    constructor(
      private espaceAdminService: EspaceAdminService,
      private sessionService: SessionService
    ) { }

  	ngOnInit() {
  		this.idAdmin = this.sessionService.getSessionId();

      this.espaceAdminService.dashboard(this.idAdmin).subscribe(
        dashboardResponse => {
          this.dashboard = dashboardResponse;
          },
           error => {
            console.log(error);
          }
      );
  	}
}
