import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigateur',
  templateUrl: './navigateur.component.html',
  styleUrls: ['./navigateur.component.css']
})
export class NavigateurComponent implements OnInit {

 currentRoute: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.currentRoute = location.path();
      } else {
        this.currentRoute = ''
      }
    });
  }

  ngOnInit() {
  }

}



