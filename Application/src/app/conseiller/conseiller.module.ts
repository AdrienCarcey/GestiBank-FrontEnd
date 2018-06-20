import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConseillerRoutingModule } from './conseiller-routing.module';
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

@NgModule({
  imports: [
    CommonModule,
    ConseillerRoutingModule
  ],
  declarations: [
  	EnteteComponent,
  	NavigateurComponent,
  	GestionClientsListeComponent,
  	GestionClientsConsultationComponent,
  	GestionClientsModificationComponent,
  	GestionDemandesAdhesionsComponent,
  	GestionDemandesClientsComponent,
  	GestionDemandesMessagesComponent,
  	DashboardComponent,
  	ConseillerComponent
  ]
})
export class ConseillerModule { }
