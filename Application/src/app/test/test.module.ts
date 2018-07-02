import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";

import { TestRoutingModule } from './test-routing.module';

import { TestComponent } from './test/test.component';
import { EnteteComponent } from './entete/entete.component';
import { NavigateurComponent } from './navigateur/navigateur.component';
import { AdrienComponent } from './adrien/adrien.component';
import { AymenComponent } from './aymen/aymen.component';
import { ClaireComponent } from './claire/claire.component';
import { MatthieuComponent } from './matthieu/matthieu.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    TestRoutingModule
  ],
  declarations: [
  	TestComponent,
  	EnteteComponent,
  	NavigateurComponent,
  	AdrienComponent,
  	AymenComponent,
  	ClaireComponent,
  	MatthieuComponent
  ]
})
export class TestModule { }
