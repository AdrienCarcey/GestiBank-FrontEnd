import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConseillersComponent } from './conseillers/conseillers.component';
import { ConseillersConsultationComponent } from './conseillers-consultation/conseillers-consultation.component';
import { ConseillersModificationComponent } from './conseillers-modification/conseillers-modification.component';
import { ConseillersAjoutComponent } from './conseillers-ajout/conseillers-ajout.component';
import { AffectationsAdhesionComponent } from './affectations-adhesion/affectations-adhesion.component';
import { AffectationsClientComponent } from './affectations-client/affectations-client.component';

const routes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		children: [
			{
				path: '',
				component: DashboardComponent
			},
			{
				path: 'conseillers',
				component: ConseillersComponent
			},
			{
				path: 'conseillers/consultation',
				component: ConseillersConsultationComponent
			},
			{
				path: 'conseillers/modification',
				component: ConseillersModificationComponent
			},
			{
				path: 'conseillers/ajout',
				component: ConseillersAjoutComponent
			},
			{
				path: 'affectations/adhesion',
				component: AffectationsAdhesionComponent
			},
			{
				path: 'affectations/client',
				component: AffectationsClientComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
