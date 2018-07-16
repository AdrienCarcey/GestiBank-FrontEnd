import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationsComponent } from './informations/informations.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { AdhesionConfirmationComponent } from './adhesion-confirmation/adhesion-confirmation.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ContactFormulaireComponent } from './contact-formulaire/contact-formulaire.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';



const routes: Routes = [
	{
		path: 'public',
		component: PublicComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'informations',
				component: InformationsComponent
			},
			{
				path: 'adhesion',
				component: AdhesionComponent
			},
			{
				path: 'adhesion/confirmation',
				component: AdhesionConfirmationComponent
			},
			{
				path: 'convertisseur',
				component: ConvertisseurComponent
			},
			{
				path: 'contact/formulaire',
				component: ContactFormulaireComponent
			},
			{
				path: 'contact/confirmation',
				component: ContactConfirmationComponent
			},
			{
				path: 'connexion',
				component: ConnexionComponent
			},
			{
				path: 'deconnexion',
				component: DeconnexionComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
