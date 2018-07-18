import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConseillersComponent } from './conseillers/conseillers.component';
import { AffectationsComponent } from './affectations/affectations.component';

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
				path: 'affectations',
				component: AffectationsComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
