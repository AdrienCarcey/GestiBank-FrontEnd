import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';

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

  constructor(private espacePublicService: EspacePublicService) { }

  ngOnInit() {

  	  this.demandeInscriptionForm = new FormGroup ({
		    nom: new FormControl('', Validators.required),
		    prenom: new FormControl('', Validators.required),
		    naissance: new FormControl('', Validators.required),
		    numeroVoie: new FormControl('', Validators.required),
		    libelleVoie: new FormControl('', Validators.required),
		    complementAdresse: new FormControl(),
		    codePostal: new FormControl('', Validators.required),
		    ville: new FormControl('', Validators.required),
		    pays: new FormControl('', Validators.required),
		    nombreEnfants: new FormControl('', Validators.required),
		    entreeMensuelle: new FormControl(),
		    nomUtilisateur: new FormControl('', Validators.required),
		    mdp: new FormControl('', Validators.required),
		    mdpConfirm: new FormControl('', Validators.required),
		    civilite: new FormControl(),
		    situationMatrimoniale: new FormControl(),
		    typeCompte: new FormControl(),
		    telephone: new FormControl(),
		    email: new FormControl()
	}); 
  }


  createDemandeInscription(){

	let demandeInscription = new DemandeInscription();

  	demandeInscription.dateDemande = new Date();
  	let client = new Client();
  	client.idUtilisateur = this.demandeInscriptionForm.controls['nomUtilisateur'].value;
  	client.motDePasse = this.demandeInscriptionForm.controls['mdp'].value;
  	let identite = new Identite();
  	client.identite.dateNaissance = this.demandeInscriptionForm.controls['naissance'].value;
  	client.identite.nom = this.demandeInscriptionForm.controls['nom'].value;
  	client.identite.prenom = this.demandeInscriptionForm.controls['prenom'].value;
  	client.identite.titreCivilite = this.demandeInscriptionForm.controls['civilite'].value;
  	client.identite = identite;
  	let contact = new Contact();
  	let adresse = new Adresse();
  	adresse.codePostal = this.demandeInscriptionForm.controls['codePostal'].value;
  	adresse.numeroVoie = this.demandeInscriptionForm.controls['numeroVoie'].value;
  	adresse.libelleVoie = this.demandeInscriptionForm.controls['libelleVoie'].value;
  	adresse.complementAdresse = this.demandeInscriptionForm.controls['complementAdresse'].value;
  	adresse.codePostal = this.demandeInscriptionForm.controls['codePostal'].value;
  	adresse.ville = this.demandeInscriptionForm.controls['ville'].value;
  	adresse.pays = this.demandeInscriptionForm.controls['pays'].value;
  	contact.adresse = adresse;
  	contact.email = this.demandeInscriptionForm.controls['email'].value;
  	contact.telephone = this.demandeInscriptionForm.controls['telephone'].value;
  	demandeInscription.client.contact = contact;
  	demandeInscription.client = client;
  	let situationFamiliale = new SituationFamiliale();
  	situationFamiliale.nombreEnfants = this.demandeInscriptionForm.controls['nombreEnfants'].value,
  	situationFamiliale.situationMatrimoniale = this.demandeInscriptionForm.controls['situationMatrimoniale'].value,
  	demandeInscription.client.situationFamiliale = situationFamiliale;


  	this.espacePublicService.adhesion(demandeInscription).subscribe(
  		espacePublicResponse => {
  			console.log("Réponse reçue");
  			if (espacePublicResponse){
  				console.log("Demande enregistrée");
  			}else{ 
  				console.log("Demande rejetée")
  			}
  		}
  	)
  }


}
