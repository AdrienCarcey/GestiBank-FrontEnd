import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl } from '@angular/forms';

import { ConnexionTestService } from '../../services/connexionTest.service'



@Component({
  selector: 'app-claire',
  templateUrl: './claire.component.html',
  styleUrls: ['./claire.component.css'],
  providers: [ConnexionTestService]
})
export class ClaireComponent implements OnInit {

  reponse: any[];
  visibility: string = "hidden";
  connexionForm = new FormGroup ({
    identifiant: new FormControl(),
    mdp: new FormControl()
  });

  constructor(private connexionTestService: ConnexionTestService) { }

  ngOnInit() {

  }

  connexion(){
    let utilisateur = this.connexionForm.controls['identifiant'].value;
    let mdp = this.connexionForm.controls['mdp'].value;
    let connexion = new Array<string>(utilisateur, mdp);

  	this.connexionTestService.connexion(connexion).subscribe(
  		connexionResponse => {
        console.log("reponse recue");
  			this.reponse = connexionResponse;
        if (this.reponse[0]) {
          window.location.assign(this.reponse[3]);
        }else{
          this.visibility = "visible";
          console.log("utilisateur inconnu");
        }
  		},
  		error => {
  			console.log(error);
  		}
  	);
  }
}
