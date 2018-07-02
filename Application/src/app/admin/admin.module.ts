import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConseillersComponent } from './conseillers/conseillers.component';
import { ConseillersConsultationComponent } from './conseillers-consultation/conseillers-consultation.component';
import { ConseillersModificationComponent } from './conseillers-modification/conseillers-modification.component';
import { ConseillersAjoutComponent } from './conseillers-ajout/conseillers-ajout.component';
import { AffectationsAdhesionComponent } from './affectations-adhesion/affectations-adhesion.component';
import { AffectationsClientComponent } from './affectations-client/affectations-client.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  	AdminComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	DashboardComponent,
  	ConseillersComponent,
  	ConseillersConsultationComponent,
  	ConseillersModificationComponent,
  	ConseillersAjoutComponent,
  	AffectationsAdhesionComponent,
  	AffectationsClientComponent
  ]
})
export class AdminModule { }
