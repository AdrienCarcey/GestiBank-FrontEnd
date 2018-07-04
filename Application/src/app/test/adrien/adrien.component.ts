import { Component, OnInit } from '@angular/core';

import { ClientTest } from "../../modeles/clientTest";
import { ClientTestService } from "../../services/clientTest.service";

@Component({
  selector: 'app-adrien',
  templateUrl: './adrien.component.html',
  styleUrls: ['./adrien.component.css'],
  providers: [ClientTestService]
})

export class AdrienComponent implements OnInit {
	clientTestInterne: ClientTest;
	
	constructor(private clientTestService: ClientTestService) {}

	ngOnInit() {
		this.clientTestService.findClientById(2).subscribe(
  			clientTestReponse => {
  				this.clientTestInterne = clientTestReponse;
  			},
  			error => {
  				console.log(error);
  			}
  		);
	}
}
