import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

import { EspacePublicService } from '../../services/espace-public.service'
import { SessionService } from '../../services/session.service';
import { Session } from '../../modeles/session'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [EspacePublicService, SessionService]
})
export class ConnexionComponent implements OnInit {

  reponse: Session;
  message: string = "";
  connexionForm = new FormGroup ({
    identifiant: new FormControl(),
    mdp: new FormControl()
  })

  constructor(private espacePublicService: EspacePublicService, private sessionService: SessionService) { }

  ngOnInit() {

  }

  connexion(){
    let utilisateur = this.connexionForm.controls['identifiant'].value;
    let mdp = this.connexionForm.controls['mdp'].value;
    let connexion = new Array<string>(utilisateur, mdp);

  	this.espacePublicService.connexion(connexion).subscribe(
  		connexionResponse => {
        console.log("reponse recue");
  			this.reponse = connexionResponse;
        if (this.reponse.mdpValide && this.reponse.utilisateurValide) {
          window.location.assign(this.reponse.typeUtilisateur);
          this.sessionService.setSession(this.reponse);
        }else{
          if (this.reponse.utilisateurValide){
            this.message = "Mot de passe erroné";
          }else{
            this.message = "Utilisateur inconnu";
          }
        }
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }
  

}
