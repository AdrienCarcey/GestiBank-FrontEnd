import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

import { ClientComponent } from './client/client.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
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

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [
  	ClientComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	DashboardComponent,
  	InformationsInfopersoComponent,
  	InformationsCompteComponent,
  	ConsultationComponent,
  	GestionVirementComponent,
  	GestionVirementConfirmationComponent,
  	DemandesComptebancaireComponent,
  	DemandesDocumentbancaireComponent,
  	DemandesInfopersoComponent,
  	DemandesCompteComponent,
  	DemandesConfirmationComponent,
  	ContactFormulaireComponent,
  	ContactConfirmationComponent
  ]
})
export class ClientModule { }
