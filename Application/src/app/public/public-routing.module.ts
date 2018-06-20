import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnteteComponent } from './entete/entete.component';
import { InformationsComponent } from './informations/informations.component';
import { AdhesionCompteComponent } from './adhesion-compte/adhesion-compte.component';
import { AdhesionInfopersoComponent } from './adhesion-infoperso/adhesion-infoperso.component';
import { AdhesionInfobancaireComponent } from './adhesion-infobancaire/adhesion-infobancaire.component';
import { AdhesionDocComponent } from './adhesion-doc/adhesion-doc.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ContactFormulaireComponent } from './contact-formulaire/contact-formulaire.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { ConnexionClientComponent } from './connexion-client/connexion-client.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { ConnexionConseillerComponent } from './connexion-conseiller/connexion-conseiller.component';

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
				path: 'adhesion/infoperso',
				component: AdhesionInfopersoComponent
			},
			{
				path: 'adhesion/infobancaire',
				component: AdhesionInfobancaireComponent
			},
			{
				path: 'adhesion/compte',
				component: AdhesionCompteComponent
			},
			{
				path: 'adhesion/doc',
				component: AdhesionDocComponent
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
				path: 'contact/confirm',
				component: ContactConfirmationComponent
			},
			{
				path: 'connexion/client',
				component: ConnexionClientComponent
			},
			{
				path: 'connexion/admin',
				component: ConnexionAdminComponent
			},
			{
				path: 'connexion/conseiller',
				component: ConnexionConseillerComponent
			}




		]

	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
