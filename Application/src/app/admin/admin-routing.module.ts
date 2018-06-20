import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { GestionConseillerListeComponent } from './gestion-conseiller-liste/gestion-conseiller-liste.component';
import { GestionConseillerAjouterComponent } from './gestion-conseiller-ajouter/gestion-conseiller-ajouter.component';
import { GestionConseillerModifierComponent } from './gestion-conseiller-modifier/gestion-conseiller-modifier.component';
import { GestionAffectationsAdhesionComponent } from './gestion-affectations-adhesion/gestion-affectations-adhesion.component';
import { GestionAffectationsClientsComponent } from './gestion-affectations-clients/gestion-affectations-clients.component';


const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'conseillers',
				component: GestionConseillerListeComponent
			},
			{
				path: 'conseillers/ajout',
				component: GestionConseillerAjouterComponent
			},
			{
				path: 'conseillers/modification',
				component: GestionConseillerModifierComponent
			},
			{
				path: 'affectationsAdhesion',
				component: GestionAffectationsAdhesionComponent
			},
			{
				path: 'affectationsClients',
				component: GestionAffectationsClientsComponent
			},
		]
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
