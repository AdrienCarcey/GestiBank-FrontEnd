import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigateur',
  templateUrl: './navigateur.component.html',
  styleUrls: ['./navigateur.component.css'],
})



export class NavigateurComponent implements OnInit {

route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = '/admin'
      }
    });
  }

  ngOnInit() {
  }

} // fin classe NavigateurComponent

