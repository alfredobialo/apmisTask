import {Component,  OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router, Routes} from '@angular/router';
import {DEFAULT_ROUTES} from './AppRoutes';
import {AuthenticationService} from '../../services/Authenticator';
import {IUserProfile} from '../../backendServices/userManager/IUserProfile';

@Component({
  selector: 'app-menu',
  template: `
       <div class="appMenu">
        <div class="row">
           <div class="col-3">
             <h3>Apmis Task</h3>
             
           </div>
          <div class="col-9">
            <a routerLinkActive="active" routerLink="/home" class="btn btn-link btn-primary" >
              Home
            </a>
            <span *ngIf="authService?.getCurrentUser.isAuthenticated">
           
            <a routerLinkActive="active" routerLink="/transaction" class="btn btn-link btn-success" >
              Transactions
            </a>
            <a routerLinkActive="active" routerLink="/config" class="btn btn-link btn-success" >
              Configuration
            </a>
          </span>
            <span *ngIf="!authService?.getCurrentUser.isAuthenticated">
           
              <a routerLinkActive="active" routerLink="/login" class="btn btn-link btn-primary" >
                Login
              </a>
              <a routerLinkActive="active" routerLink="/register" class="btn btn-link btn-primary" >
                Register
              </a>
            </span>
           
            <!--<span *ngFor="let r of menus">-->
               <!--<a *ngIf="r.data"-->
                 <!--routerLinkActive="active" routerLink="/{{r.path}}" class="btn btn-link btn-primary" >-->
              <!--{{r?.data?.title}}-->
            <!--</a>-->
            <!--</span>-->
           <span *ngIf="authService?.getCurrentUser?.isAuthenticated" class="float-right">
              Welcome back :{{authService.getCurrentUser.user.firstName}} {{authService.getCurrentUser.user.lastName}}
              <a href="" class="btn btn-danger" (click)="logout($event)">Logout</a>
           </span>
            
            
          </div>
          
        </div>
       </div>
  `,
  styles : [`
    div.appMenu {
      color: white;
      background-image: linear-gradient(#60c0cc, #3c77c7);
      padding: 10px;
    }

    a {
      color: white;
      text-decoration: none;
      padding: 15px 25px;

    }

    a.active {
      border: none !important;
      background-color: black;
    }
  `]

})

export class AppMenuComponent implements OnInit {
 menus:Routes  = DEFAULT_ROUTES;

  currentUser : {user: IUserProfile, isAuthenticated: boolean};
  constructor( public authService : AuthenticationService,
                   private activeRoute : ActivatedRoute, private router : Router) {
    this.currentUser  = authService.getCurrentUser;
  }
  logout(evt : Event)
  {

    evt.preventDefault();
    // perform clean up here
    this.authService.logoutCurrentUser();
    this.router.navigate(["/login"]);




  }
  ngOnInit() {
  }
}
