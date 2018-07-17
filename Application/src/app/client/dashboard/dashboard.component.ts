import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SessionService]
})
export class DashboardComponent implements OnInit {

	nom: string;
	prenom: string;

	constructor(private sessionService: SessionService) { }

  	ngOnInit() {
  		this.nom = this.sessionService.getSessionNom();
  		this.prenom = this.sessionService.getSessionPrenom();
  	}

}
