import { Component, OnInit } from '@angular/core';
import { EspaceClientService } from '../../services/espace-client.service';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { DemandeChequier } from '../../modeles/demande-chequier';
import { DemandeRib } from '../../modeles/demande-rib';
import { Client } from '../../modeles/client';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css'],
  providers: [EspaceClientService, SessionService]  
})

export class DemandeComponent implements OnInit {

	  private client: Client;
    idClient: number;


    constructor(private espaceClientService: EspaceClientService, 
  		private router: Router,
  		private sessionService: SessionService) { }


    ngOnInit() {
    	  this.idClient = this.sessionService.getSessionId();
  	  	this.espaceClientService.findClientById(this.idClient).subscribe(
  	  		clientResponse => {
  	  			this.client = clientResponse;
  	  		}
    	  )
   	}


  	createDemandeChequier(){
  		let demandeChequier = new DemandeChequier();
  		demandeChequier.dateDemande = new Date();
  		demandeChequier.statut = "demande non traitee";
      this.espaceClientService.createDemandeChequier(demandeChequier, this.idClient).subscribe(
        demandeChequierResponse => {
          if (demandeChequierResponse){
            console.log("Demande enregistrée");
          } else {
            console.log("Demande rejetée");
          }
        }
      )  
      this.router.navigateByUrl('/client/demande/confirmation');	
    }	 


    createDemandeRib(){
      let demandeRib = new DemandeRib();
      demandeRib.dateDemande = new Date();
      demandeRib.statut = "demande non traitee";
      this.espaceClientService.createDemandeRib(demandeRib, this.idClient).subscribe(
        demandeChequierResponse => {
          if (demandeChequierResponse){
            console.log("Demande enregistrée");
          } else {
            console.log("Demande rejetée");
          }
        }
      ) 
      this.router.navigateByUrl('/client/demande/confirmation');  
    }   
}
