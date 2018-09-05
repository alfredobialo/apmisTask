import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../../services/Authenticator';

@Injectable(
  {
    providedIn:'root'
  }
)
export class TransactionGaurdService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // perform authentication  then authorization checks
    const isloggedIn  = this.authService.getCurrentUser.isAuthenticated;
    if(!isloggedIn) // redirect to login page
    {
      this.authService.redirectUrl  = state.url;
      this.router.navigate(["/login"],{replaceUrl : false});
    }


    return isloggedIn;
  }

  constructor(private router: Router, private authService : AuthenticationService) {
  }
}
