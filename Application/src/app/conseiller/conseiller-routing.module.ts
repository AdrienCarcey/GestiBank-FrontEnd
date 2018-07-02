import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConseillerComponent } from './conseiller/conseiller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsConsultationComponent } from './clients-consultation/clients-consultation.component';
import { ClientsConsultationCompteComponent } from './clients-consultation-compte/clients-consultation-compte.component';
import { ClientsModificationComponent } from './clients-modification/clients-modification.component';
import { DemandesAdhesionComponent } from './demandes-adhesion/demandes-adhesion.component';
import { DemandesClientComponent } from './demandes-client/demandes-client.component';
import { DemandesMessagesComponent } from './demandes-messages/demandes-messages.component';

const routes: Routes = [
	{
		path: 'conseiller',
		component: ConseillerComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'clients',
				component: ClientsComponent
			},
			{
				path: 'clients/consultation',
				component: ClientsConsultationComponent
			},
			{
				path: 'clients/consultation/compte',
				component: ClientsConsultationCompteComponent
			},
			{
				path: 'clients/modification',
				component: ClientsModificationComponent
			},
			{
				path: 'demandes/adhesion',
				component: DemandesAdhesionComponent
			},
			{
				path: 'demandes/client',
				component: DemandesClientComponent
			},
			{
				path: 'demandes/messages',
				component: DemandesMessagesComponent
			}
		]
	}
];

/*const routes: Routes = [
	{
		path: 'conseiller',
		component: ConseillerComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'clients',
				component: ClientsComponent
			},
				path: 'clients/consultation',
				component: ClientsConsultationComponent
			},
			},
				path: 'clients/consultation/compte',
				component: ClientsConsultationCompteComponent
			},
			},
				path: 'clients/modification',
				component: ClientsModificationComponent
			},
			},
				path: 'demandes/adhesion',
				component: DemandesAdhesionComponent
			},
			},
				path: 'demandes/client',
				component: DemandesClientComponent
			},
			},
				path: 'demandes/messages',
				component: DemandesMessagesComponent
			}
		]
	}
];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillerRoutingModule { }
