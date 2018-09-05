import {Routes} from '@angular/router';
import {HomePageComponent} from '../appPages/HomeComponent';

import {PageNotFoundComponent} from '../appPages/PageNotFoundComponent';
import {LoginPageComponent} from '../appPages/LoginPageComponent';
import {RegistrationPageComponent} from '../appPages/RegistrationPageComponent';
import {TransactionPageComponent} from '../appPages/TransactionPageComponent';
import {ConfigPageComponent} from '../appPages/ConfigPageComponent';
import {TransactionGaurdService} from './gaurds/transactionGaurdService';

export const DEFAULT_ROUTES: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    //
    // data : {
    //   title : "Home"
    // },

  },
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      title: 'Home'
    },

  },
  {
    path: 'config',
    canActivate : [TransactionGaurdService],
    component: ConfigPageComponent, data: {
      title: 'Configuration'
    }
  },
  {
    path: 'transaction', component: TransactionPageComponent,
    canActivate : [TransactionGaurdService],
    data: {
      title: 'Configuration'
    }
  },
  {
    path: 'login',
    component: LoginPageComponent
    ,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    component: RegistrationPageComponent
    ,
    data: {
      title: 'Register'
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


