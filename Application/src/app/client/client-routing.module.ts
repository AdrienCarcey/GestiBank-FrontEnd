import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactFormulaireComponent } from './contact-formulaire/contact-formulaire.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { DemandeComponent } from './demande/demande.component';
import { VirementComponent } from './virement/virement.component';
import { VirementConfirmationComponent } from './virement-confirmation/virement-confirmation.component';
import { InfopersoComponent } from './infoperso/infoperso.component';
import { ConsultationComponent } from './consultation/consultation.component'
import { DemandeConfirmationComponent } from './demande-confirmation/demande-confirmation.component'

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
				path: 'infoperso',
				component: InfopersoComponent
			},
			{
				path: 'comptes',
				component: ConsultationComponent
			},
			{
				path: 'demande',
				component: DemandeComponent
			},
			{
				path: 'demande/confirmation',
				component: DemandeConfirmationComponent
			},
			{
				path: 'virement',
				component: VirementComponent
			},
			{
				path: 'virement/confirmation',
				component: VirementConfirmationComponent
			},
			{
				path: 'contact',
				component: ContactFormulaireComponent
			},
			{
				path: 'contact/confirmation',
				component: ContactConfirmationComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
