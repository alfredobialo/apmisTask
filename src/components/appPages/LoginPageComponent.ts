import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {IUserProfile} from '../../backendServices/userManager/IUserProfile';
import {isNil} from 'lodash';
import {AuthenticationService} from '../../services/Authenticator';
import {setPageMeta, setPageTitle} from './_pageMetadata';
@Component({
  selector: 'login-page',
  template: `
    
    <div *ngIf="!authService?.getCurrentUser.isAuthenticated" class="d-flex justify-content-center 
flex-column f align-content-center login-container ">
        
        <div class="bg-warning p-3 mb-3" *ngIf="errMessage ">
            <span class="text-danger">
              {{errMessage}}
            </span>
          
        </div>
      
        <login-ui (onloginSuccess)="loginSuccess($event)" (onloginFailure)="this.errMessage = $event">
          
        </login-ui>
      
    </div>
      
  `,
  styles : [`
    .login-container
    {
      flex-direction: column;
      min-height: 550px;
      
    }
  `]
})

export class LoginPageComponent implements OnInit {
  /*
  *   We could ngRx to store the currently login user
  *   but let's store the current logged in user on this page
  *
  * */
  currentUser   : IUserProfile;
  errMessage : string;
  get isLogin() {
    return isNil(this.currentUser);
  }

  constructor(public authService : AuthenticationService,private title: Title, private meta : Meta) {
     // set page title and meta tags
    setPageTitle("Login to Continue", title);
    setPageMeta("Apimis Task Login page","description",meta);
  }
  loginSuccess(user : IUserProfile)
  {
      this.currentUser  = user;
  }
  ngOnInit() {
  }
}
