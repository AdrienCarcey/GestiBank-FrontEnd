import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConseillerRoutingModule } from './conseiller-routing.module';

import { ConseillerComponent } from './conseiller/conseiller.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsConsultationComponent } from './clients-consultation/clients-consultation.component';
import { ClientsConsultationCompteComponent } from './clients-consultation-compte/clients-consultation-compte.component';
import { ClientsModificationComponent } from './clients-modification/clients-modification.component';
import { DemandesAdhesionComponent } from './demandes-adhesion/demandes-adhesion.component';
import { DemandesClientComponent } from './demandes-client/demandes-client.component';
import { DemandesMessagesComponent } from './demandes-messages/demandes-messages.component';

@NgModule({
  imports: [
    CommonModule,
    ConseillerRoutingModule
  ],
  declarations: [
  	ConseillerComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	DashboardComponent,
  	ClientsComponent,
  	ClientsConsultationComponent,
  	ClientsConsultationCompteComponent,
  	ClientsModificationComponent,
  	DemandesAdhesionComponent,
  	DemandesClientComponent,
  	DemandesMessagesComponent
  ]
})
export class ConseillerModule { }
