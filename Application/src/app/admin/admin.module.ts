import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { GestionConseillerListeComponent } from './gestion-conseiller-liste/gestion-conseiller-liste.component';
import { GestionConseillerAjouterComponent } from './gestion-conseiller-ajouter/gestion-conseiller-ajouter.component';
import { GestionConseillerModifierComponent } from './gestion-conseiller-modifier/gestion-conseiller-modifier.component';
import { GestionAffectationsAdhesionComponent } from './gestion-affectations-adhesion/gestion-affectations-adhesion.component';
import { GestionAffectationsClientsComponent } from './gestion-affectations-clients/gestion-affectations-clients.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
  AdminComponent,
   DashboardComponent,
   EnteteComponent,
   NavigateurComponent,
   GestionConseillerListeComponent,
   GestionConseillerAjouterComponent,
   GestionConseillerModifierComponent,
   GestionAffectationsClientsComponent,
   GestionAffectationsAdhesionComponent
   ]
})
export class AdminModule { }
