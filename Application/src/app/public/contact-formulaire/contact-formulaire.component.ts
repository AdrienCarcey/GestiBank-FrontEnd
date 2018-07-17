import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { EspacePublicService } from '../../services/espace-public.service';
import { MessagePublic } from '../../modeles/message-public';


@Component({
  selector: 'app-contact-formulaire',
  templateUrl: './contact-formulaire.component.html',
  styleUrls: ['./contact-formulaire.component.css'],
  providers: [EspacePublicService]
})
export class ContactFormulaireComponent implements OnInit {

  	messageForm: FormGroup;

  	constructor(private espacePublicService: EspacePublicService) { }

  	ngOnInit() {

  	  	this.messageForm = new FormGroup ({
		    nom: new FormControl(),
		    prenom: new FormControl(),
        	titreCivilite: new FormControl(),
		   	email: new FormControl(),
		   	message: new FormControl(),
		   	sujet: new FormControl()
   		}); 
  	}


  	createMessagePublic(){

		let message = new MessagePublic();
		message.nom = this.messageForm.controls["nom"].value;
		message.prenom = this.messageForm.controls["prenom"].value;
		message.email = this.messageForm.controls["email"].value;
		message.message = this.messageForm.controls["message"].value;
  		message.sujet = this.messageForm.controls["sujet"].value;
  		message.statut = "demande non traitee";
  		message.dateDemande = new Date();
  		
	  	this.espacePublicService.createMessagePublic(message).subscribe(
	  		espacePublicResponse => {
	  			console.log("Réponse reçue");
	  			if (espacePublicResponse){
	  				console.log("Message enregistré");
	  			}else{ 
	  				console.log("Message rejeté")
	  			}
	  		}
  		)
  }

}
