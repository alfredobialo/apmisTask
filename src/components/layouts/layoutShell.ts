import {Component, OnInit,VERSION} from '@angular/core';

@Component({
  selector: 'layout-shell-component',
  template: `
    <!--App Menu goes here -->
    <app-menu ></app-menu>
    <div class="container-fluid">
      
      <div class="d-flex justify-content-center">
        <!--  Router Outlet-->
        <div class="p-2">
          <router-outlet>

          </router-outlet>
        </div>
        <!--Router End-->
      </div>

      <div class="d-flex justify-content-center">
          <p class="text-muted">Copyright 2018 Apmis Task. Built with Angular {{ngVersion}}</p>
        
      </div>
      
      <!--Footer-->
      
    </div>
  
  `
})

export class LayoutShellComponent implements OnInit {
  ngVersion :  string = VERSION.full;
  constructor() {
  }

  ngOnInit() {
  }
}
