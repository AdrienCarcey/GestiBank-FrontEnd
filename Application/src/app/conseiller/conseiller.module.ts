import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { ConseillerRoutingModule } from './conseiller-routing.module';

import { ConseillerComponent } from './conseiller/conseiller.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { DemandesComponent } from './demandes/demandes.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ConseillerRoutingModule
  ],
  declarations: [
  	ConseillerComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	DashboardComponent,
  	ClientsComponent,
  	DemandesComponent
  ]
})
export class ConseillerModule { }
