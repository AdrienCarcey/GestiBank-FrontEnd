import { Component, OnInit } from '@angular/core';
import { EspaceClientService } from '../../services/espace-client.service';
import { SessionService } from '../../services/session.service';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { MessageClient } from '../../modeles/message-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-formulaire',
  templateUrl: './contact-formulaire.component.html',
  styleUrls: ['./contact-formulaire.component.css'],
  providers: [EspaceClientService, SessionService]

})
export class ContactFormulaireComponent implements OnInit {

	messageForm: FormGroup;
  	constructor(private espaceClientService: EspaceClientService, 
  		private router: Router,
  		private sessionService: SessionService) { }

  	ngOnInit() {
  	  	this.messageForm = new FormGroup ({
		   	message: new FormControl(),
		   	sujet: new FormControl()
   		}); 
  	}


  	createMessageClient(){


  		let message = new MessageClient();
  		message.message = this.messageForm.controls["message"].value;
    	message.sujet = this.messageForm.controls["sujet"].value;
    	message.statut = "demande non traitee";
    	message.dateDemande = new Date();
    	let idClient: number;
    	idClient = this.sessionService.getSessionId();
    	message.idClient = idClient;

  	  	this.espaceClientService.createMessageClient(message).subscribe(
  	  		espacePublicResponse => {
  	  			console.log("Réponse reçue");
  	  			if (espacePublicResponse){
  	  				console.log("Message enregistré");
  	  			}else{ 
  	  				console.log("Message rejeté")
  	  			}
  	  		}
    		)

    	this.router.navigateByUrl('/client/contact/confirmation');
    }


}
