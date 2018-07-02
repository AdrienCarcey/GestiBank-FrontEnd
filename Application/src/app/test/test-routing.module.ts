import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AdrienComponent } from './adrien/adrien.component';
import { AymenComponent } from './aymen/aymen.component';
import { ClaireComponent } from './claire/claire.component';
import { MatthieuComponent } from './matthieu/matthieu.component';

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
				path: 'claire',
				component: ClaireComponent
			},
			{
				path: 'matthieu',
				component: MatthieuComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
