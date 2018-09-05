import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutShellComponent} from '../components/layouts/layoutShell';
import {LoginComponent} from '../components/loginComponent';
import {RouterModule} from '@angular/router';
import {DEFAULT_ROUTES} from '../components/layouts/AppRoutes';
import {HomePageComponent} from '../components/appPages/HomeComponent';

import {AppMenuComponent} from '../components/layouts/appMenu';

import {PageNotFoundComponent} from '../components/appPages/PageNotFoundComponent';
import {RegistrationPageComponent} from '../components/appPages/RegistrationPageComponent';
import {LoginPageComponent} from '../components/appPages/LoginPageComponent';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from '../components/registerComponent';
import {TransactionPageComponent} from '../components/appPages/TransactionPageComponent';
import {ConfigPageComponent} from '../components/appPages/ConfigPageComponent';
import {UserProfileComponent} from '../components/userSpecific/UserProfileComponent';
import {UserWalletSetupComponent} from '../components/userSpecific/UserWalletSetup';
import { UserListComponent } from '../components/userSpecific/UserListComponent';
import { NewTransactionComponent } from '../components/userSpecific/NewTransactionComponent';
// import {RegistrationComponent} from '../components/registrationComponent';



@NgModule({
  declarations: [
    /* Most component and functions can be extracted into a seperate MODULE (feature Module) , Shared Module etc*/
    AppComponent,
    LayoutShellComponent,
    LoginComponent,
    HomePageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    AppMenuComponent,
    TransactionPageComponent,
    ConfigPageComponent,
    UserProfileComponent,
    UserWalletSetupComponent,
    UserListComponent,
    NewTransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(DEFAULT_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
