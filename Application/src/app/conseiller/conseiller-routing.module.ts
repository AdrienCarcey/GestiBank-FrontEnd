import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { GestionClientsListeComponent } from './gestion-clients-liste/gestion-clients-liste.component';
import { GestionClientsConsultationComponent } from './gestion-clients-consultation/gestion-clients-consultation.component';
import { GestionClientsModificationComponent } from './gestion-clients-modification/gestion-clients-modification.component';
import { GestionDemandesAdhesionsComponent } from './gestion-demandes-adhesions/gestion-demandes-adhesions.component';
import { GestionDemandesClientsComponent } from './gestion-demandes-clients/gestion-demandes-clients.component';
import { GestionDemandesMessagesComponent } from './gestion-demandes-messages/gestion-demandes-messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConseillerComponent } from './conseiller/conseiller.component';

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
				component: GestionClientsListeComponent
			},
			{
				path: 'clients/consultation',
				component: GestionClientsConsultationComponent
			},
			{
				path: 'clients/modification',
				component: GestionClientsModificationComponent
			},
			{
				path: 'demandes/adhesions',
				component: GestionDemandesAdhesionsComponent
			},
			{
				path: 'demandes/clients',
				component: GestionDemandesClientsComponent
			},
			{
				path: 'demandes/messages',
				component: GestionDemandesMessagesComponent
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConseillerRoutingModule { }
