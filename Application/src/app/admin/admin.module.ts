import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConseillersComponent } from './conseillers/conseillers.component';
import { AffectationsComponent } from './affectations/affectations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ],
  declarations: [
  	AdminComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	DashboardComponent,
  	ConseillersComponent,
  	AffectationsComponent
  ]
})
export class AdminModule { }
