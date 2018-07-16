import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConseillerComponent } from './conseiller/conseiller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { DemandesComponent } from './demandes/demandes.component';

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
				path: 'demandes',
				component: DemandesComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillerRoutingModule { }
