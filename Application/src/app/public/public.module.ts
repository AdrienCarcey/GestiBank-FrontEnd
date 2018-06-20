import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public/public.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnteteComponent } from './entete/entete.component';
import { InformationsComponent } from './informations/informations.component';
import { AdhesionCompteComponent } from './adhesion-compte/adhesion-compte.component';
import { AdhesionInfopersoComponent } from './adhesion-infoperso/adhesion-infoperso.component';
import { AdhesionInfobancaireComponent } from './adhesion-infobancaire/adhesion-infobancaire.component';
import { AdhesionDocComponent } from './adhesion-doc/adhesion-doc.component';
import { ConvertisseurComponent } from './convertisseur/convertisseur.component';
import { ContactFormulaireComponent } from './contact-formulaire/contact-formulaire.component';
import { ContactConfirmationComponent } from './contact-confirmation/contact-confirmation.component';
import { ConnexionClientComponent } from './connexion-client/connexion-client.component';
import { ConnexionAdminComponent } from './connexion-admin/connexion-admin.component';
import { ConnexionConseillerComponent } from './connexion-conseiller/connexion-conseiller.component';
import { NavigateurComponent } from './navigateur/navigateur.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [PublicComponent, DashboardComponent, EnteteComponent, InformationsComponent, AdhesionCompteComponent, AdhesionInfopersoComponent, AdhesionInfobancaireComponent, AdhesionDocComponent, ConvertisseurComponent, ContactFormulaireComponent, ContactConfirmationComponent, ConnexionClientComponent, ConnexionAdminComponent, ConnexionConseillerComponent, NavigateurComponent]
})
export class PublicModule { }
