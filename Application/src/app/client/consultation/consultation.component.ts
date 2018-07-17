import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';

import { ClientTest } from '../../modeles/clientTest';
import { EspaceClientService } from '../../services/espace-client.service';
import { SessionService } from '../../services/session.service';
import { OperationBancaire } from '../../modeles/operation-bancaire'

import { Compte } from '../../modeles/compte';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css'],
  providers: [EspaceClientService, SessionService]
})


export class ConsultationComponent implements OnInit {

	selectedValue: string;


	/*listeComptes = [{ id: 1, label: 'CCP', status: true, solde:12000 }, 
		            { id: 2, label: 'CE', status: false, solde:10}, 
		            { id: 3, label: 'LA', status: true, solde:120000}];

	operations = [{id:1, libelle:'crédit', montant:200, dateop:new Date(2017, 1, 11)},
	              {id:2, libelle:'debit', montant:1500, dateop:new Date(2017, 12, 18)},
				  {id:3, libelle:'debit', montant:100, dateop:new Date(2017, 12, 21)},
				  {id:4, libelle:'crédit', montant:20, dateop:new Date(2017, 12, 31)}]
*/	
	public dateDebut: Date;
	public dateFin: Date;
	public myForm: FormGroup;
	private idClient: number;
	public comptes: Array<Compte>;
	public operations: Array<OperationBancaire>;
	private compteSolde: number;
	clientInterne = new ClientTest();

	constructor(private espaceClientService: EspaceClientService,
				private sessionService: SessionService) { }
 //, private _fb: FormBuilder
	  
	ngOnInit() {

		this.myForm = new FormGroup({ category: new FormControl(null, Validators.required),
									  dateDebut: new FormControl(),
									  dateFin: new FormControl()
								 });
		this.idClient = this.sessionService.getSessionId();

		this.espaceClientService.findComptesById(this.idClient).subscribe(
	  		comptesResponse => {
	        	console.log("reponse recue");
	  			this.comptes = comptesResponse;
	  		},
	  		error => {
	  			console.log(error);
	  		}
  		);
	}

	afficherCompte(){
		let idCompte = this.myForm.controls["category"].value;
		this.dateDebut = this.myForm.controls["dateDebut"].value;
		this.dateFin = this.myForm.controls["dateFin"].value;
		this.espaceClientService.findOperationsById(idCompte).subscribe(
			operationsResponse => {
				console.log("Liste Opérations Reçues");
				this.operations = operationsResponse;
			},
			error => {
				console.log(error);
			}
		)

		for (let c of this.comptes) {
			if (c.idCompte  == idCompte){
				this.compteSolde = c.solde;
			}
		}
		
	}
/*	findClient(id: number){
		this.clientTestService.findClientById(id).subscribe(
			clientTestResponse=>{
				this.clientInterne = clientTestResponse;
			},
			Error=>{
				console.log(Error);
			}
		);
	}*/

}
