import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AdrienComponent } from './adrien/adrien.component';
import { AymenComponent } from './aymen/aymen.component';
import { ClaireComponent } from './claire/claire.component';
import { MatthieuComponent } from './matthieu/matthieu.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { TableauComponent } from './tableau/tableau.component';
import { OngletComponent } from './onglet/onglet.component';

const routes: Routes = [
	{
		path: 'test',
		component: TestComponent,
		children: [
			{
				path: 'adrien',
				component: AdrienComponent
			},
			{
				path: 'aymen',
				component: AymenComponent
			},
			{
				path: 'matthieu',
				component: MatthieuComponent
			},
			{
				path: 'formulaire',
				component: FormulaireComponent
			},
			{
				path: 'tableau',
				component: TableauComponent
			},
			{
				path: 'onglet',
				component: OngletComponent
			},
			{
				path: 'claire',
				component: ClaireComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
