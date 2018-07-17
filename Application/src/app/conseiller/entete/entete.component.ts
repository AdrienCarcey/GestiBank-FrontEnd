import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css'],
  providers: [SessionService]
})
export class EnteteComponent implements OnInit {

 nomUtilisateur : string;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {

  	this.nomUtilisateur = this.sessionService.getSessionName();
  
  }

}
