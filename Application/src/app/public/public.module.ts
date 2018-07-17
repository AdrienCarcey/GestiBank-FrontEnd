import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { PublicComponent } from './public/public.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformationsComponent } from './informations/informations.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { AdhesionConfirmationComponent } from './adhesion-confirmation/adhesion-confirmation.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ContactFormulaireComponent } from './contact-formulaire/contact-formulaire.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
  	PublicComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	DashboardComponent,
  	InformationsComponent,
  	AdhesionConfirmationComponent,
  	ConvertisseurComponent,
  	ContactFormulaireComponent,
  	ContactConfirmationComponent,
  	ConnexionComponent,
  	DeconnexionComponent,
  	AdhesionComponent
  ]
})
export class PublicModule { }
