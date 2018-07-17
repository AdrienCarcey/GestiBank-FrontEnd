import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DemandeInscription } from '../../modeles/demande-inscription';
import { Client } from '../../modeles/client';
import { Identite } from '../../modeles/identite';
import { Adresse } from '../../modeles/adresse';
import { Contact } from '../../modeles/contact';
import { SituationFamiliale } from '../../modeles/situation-familiale';

import { EspacePublicService } from '../../services/espace-public.service';
@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.component.html',
  styleUrls: ['./adhesion.component.css'],
  providers: [EspacePublicService]
})
export class AdhesionComponent implements OnInit {

  demandeInscriptionForm: FormGroup;

  constructor(private espacePublicService: EspacePublicService,
      private router: Router) { }

  ngOnInit() {

  	  this.demandeInscriptionForm = new FormGroup ({
		    nom: new FormControl(),
		    prenom: new FormControl(),
        titreCivilite: new FormControl(),
		    naissance: new FormControl(),
		    numeroVoie: new FormControl(),
		    libelleVoie: new FormControl(),
		    complementAdresse: new FormControl(),
		    codePostal: new FormControl(),
		    ville: new FormControl(),
		    pays: new FormControl(),
        email: new FormControl(),
        telephone: new FormControl(),
		    situationMatrimoniale: new FormControl(),
        nombreEnfants: new FormControl(),
        typeCompte: new FormControl(),
        entreeMensuelle: new FormControl(),
		    nomUtilisateur: new FormControl(),
		    mdp: new FormControl(),
		    mdpConfirm: new FormControl(),
	}); 
  }


  createDemandeInscription(){

	  let demandeInscription = new DemandeInscription();

  	demandeInscription.dateDemande = new Date();
    demandeInscription.statut = "demande non traitee";
  	let client = new Client();
    client.statut = "inscription";
  	client.nomUtilisateur = this.demandeInscriptionForm.controls['nomUtilisateur'].value;
  	client.motDePasse = this.demandeInscriptionForm.controls['mdp'].value;
  	let identite = new Identite();
    identite.titreCivilite = this.demandeInscriptionForm.controls['titreCivilite'].value;
  	identite.nom = this.demandeInscriptionForm.controls['nom'].value;
  	identite.prenom = this.demandeInscriptionForm.controls['prenom'].value;
    identite.dateNaissance = this.demandeInscriptionForm.controls['naissance'].value;
  	client.identite = identite;
  	let contact = new Contact();
    contact.email = this.demandeInscriptionForm.controls['email'].value;
    contact.telephone = this.demandeInscriptionForm.controls['telephone'].value;
    let adresse = new Adresse();
  	adresse.numeroVoie = this.demandeInscriptionForm.controls['numeroVoie'].value;
  	adresse.libelleVoie = this.demandeInscriptionForm.controls['libelleVoie'].value;
  	adresse.complementAdresse = this.demandeInscriptionForm.controls['complementAdresse'].value;
  	adresse.codePostal = this.demandeInscriptionForm.controls['codePostal'].value;
  	adresse.ville = this.demandeInscriptionForm.controls['ville'].value;
  	adresse.pays = this.demandeInscriptionForm.controls['pays'].value;
  	contact.adresse = adresse;
  	client.contact = contact;
  	let situationFamiliale = new SituationFamiliale();
    situationFamiliale.situationMatrimoniale = this.demandeInscriptionForm.controls['situationMatrimoniale'].value,
    situationFamiliale.nombreEnfants = this.demandeInscriptionForm.controls['nombreEnfants'].value,
    client.situationFamiliale = situationFamiliale;
    demandeInscription.client = client;
  	

  	this.espacePublicService.demandeInscription(demandeInscription).subscribe(
  		espacePublicResponse => {
  			console.log("Réponse reçue");
  			if (espacePublicResponse){
  				console.log("Demande enregistrée");
  			}else{ 
  				console.log("Demande rejetée")
  			}
  		}
  	)

    this.router.navigateByUrl('/public/adhesion/confirmation');

  }


}
