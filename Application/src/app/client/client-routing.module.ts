import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client/client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationsInfopersoComponent } from './informations-infoperso/informations-infoperso.component';
import { InformationsCompteComponent } from './informations-compte/informations-compte.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { GestionVirementComponent } from './gestion-virement/gestion-virement.component';
import { GestionVirementConfirmationComponent } from './gestion-virement-confirmation/gestion-virement-confirmation.component';
import { DemandesComptebancaireComponent } from './demandes-comptebancaire/demandes-comptebancaire.component';
import { DemandesDocumentbancaireComponent } from './demandes-documentbancaire/demandes-documentbancaire.component';
import { DemandesInfopersoComponent } from './demandes-infoperso/demandes-infoperso.component';
import { DemandesCompteComponent } from './demandes-compte/demandes-compte.component';
import { DemandesConfirmationComponent } from './demandes-confirmation/demandes-confirmation.component';
import { ContactFormulaireComponent } from './contact-formulaire/contact-formulaire.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';

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
				path: 'informations/infoperso',
				component: InformationsInfopersoComponent
			},
			{
				path: 'informations/compte',
				component: InformationsCompteComponent
			},
			{
				path: 'consultation',
				component: ConsultationComponent
			},
			{
				path: 'gestion/virement',
				component: GestionVirementComponent
			},
			{
				path: 'gestion/virement/confirmation',
				component: GestionVirementConfirmationComponent
			},
			{
				path: 'demandes/comptebancaire',
				component: DemandesComptebancaireComponent
			},
			{
				path: 'demandes/documentbancaire',
				component: DemandesDocumentbancaireComponent
			},
			{
				path: 'demandes/infoperso',
				component: DemandesInfopersoComponent
			},
			{
				path: 'demandes/compte',
				component: DemandesCompteComponent
			},
			{
				path: 'demandes/confirmation',
				component: DemandesConfirmationComponent
			},
			{
				path: 'contact/formulaire',
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
