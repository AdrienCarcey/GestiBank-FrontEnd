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

  reponse: boolean;
  utilisateur: string;
  mdp: string;

  connexionForm = new FormGroup ({
    identifiant: new FormControl(),
    mdp: new FormControl()
  });

  constructor(private connexionTestService: ConnexionTestService) { }

  ngOnInit() {
  }

  connexion(){
    this.utilisateur = this.connexionForm.controls['identifiant'].value;
    this.mdp = this.connexionForm.controls['mdp'].value;

  	this.connexionTestService.connexion().subscribe(
  		connexionResponse => {
  			this.reponse = connexionResponse;
  		},
  		error => {
  			console.log(error);
  		}
  	);

    if (this.reponse) {
      window.location.assign("admin");
    }
  }

   
}
