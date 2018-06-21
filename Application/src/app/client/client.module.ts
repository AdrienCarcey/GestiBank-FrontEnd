import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnteteComponent } from './entete/entete.component';
import { GestionDemandeComponent } from './gestion-demande/gestion-demande.component';
import { GestionConsulterComponent } from './gestion-consulter/gestion-consulter.component';
import { GestionCompteComponent } from './gestion-compte/gestion-compte.component';
import { ClientComponent } from './client/client.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { GestionAjoutCompteComponent } from './gestion-ajout-compte/gestion-ajout-compte.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  declarations: [
  DashboardComponent, 
  EnteteComponent, 
   GestionDemandeComponent,
     GestionConsulterComponent,
      GestionCompteComponent,
       ClientComponent,
        NavigateurComponent,
        GestionAjoutCompteComponent]
})
export class ClientModule { }
