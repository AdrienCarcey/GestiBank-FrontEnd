import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SessionService]
})
export class AdminComponent implements OnInit {

  nom: string;
  constructor(private sessionService: SessionService) { }

  ngOnInit() {
  	
  	this.nom = this.sessionService.getSessionName();
  }

}
