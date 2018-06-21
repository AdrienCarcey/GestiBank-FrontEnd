import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { EnteteComponent } from './entete/entete.component';
import { GestionDemandeComponent } from './gestion-demande/gestion-demande.component';
import { GestionConsulterComponent } from './gestion-consulter/gestion-consulter.component';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { ClientComponent } from './client/client.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { GestionAjoutCompteComponent } from './gestion-ajout-compte/gestion-ajout-compte.component';

const routes: Routes = [
{
path: 'client',
		component: ClientComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'gestion/compte',
				component: GestionCompteComponent
			},
			{
				path: 'consultation',
				component: GestionConsulterComponent
			},
			{
				path: 'gestion/demande',
				component: GestionDemandeComponent
			},
			{
				path: 'demandes/ajout/compte',
				component: GestionAjoutCompteComponent
			},
			
		]
	}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
