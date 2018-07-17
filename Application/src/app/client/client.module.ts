import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';

import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

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
import { ConsultationComponent } from './consultation/consultation.component';
import { DemandeConfirmationComponent } from './demande-confirmation/demande-confirmation.component'

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  	ClientComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	DashboardComponent,
  	ContactFormulaireComponent,
  	ContactConfirmationComponent,
  	DemandeComponent,
  	VirementComponent,
  	VirementConfirmationComponent,
  	InfopersoComponent,
  	DemandeConfirmationComponent,
    ConsultationComponent
  ]
})
export class ClientModule { }
