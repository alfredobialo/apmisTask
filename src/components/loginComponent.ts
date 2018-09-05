import {Component, EventEmitter, OnInit, Output, OnDestroy, Input} from '@angular/core';
import {AuthenticationService} from '../services/Authenticator';
import {IUserProfile} from '../backendServices/userManager/IUserProfile';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  preserveWhitespaces : false,
  selector: 'login-ui',
  template: `

    <form  role="form" novalidate>
      <div class="p-5 bg-white border shadow-sm" style="width: 450px;">
        <p class="text-center font-weight-bold f">Login to Continue</p>
        <div class="row">
          <div class="col-sm-3">
            User Id

          </div>
          <div class="col-sm-9">
            <input type="text"  name="userId" #userId  class="form-control">
          </div>
        </div>
        <div class="clearfix"><br></div>
        <div class="row">
          <div class="col-sm-3">
            Password

          </div>
          <div class="col-sm-9">
            <input type="password" #password class="form-control">
          </div>
        </div>
        <div class="clearfix">
          <br>

        </div>
        <div class="row">
          <div class="col-sm-3">


          </div>

          <div class="col-sm-9">
            <button [disabled]="processing" class="btn btn-primary" (click)="authenticate(userId, password)">
              {{processing ? 'Processing...' : 'Login' }}
            </button>
          </div>

        </div>
      </div>
    </form>
  `,
  exportAs: 'login'

})

export class LoginComponent implements OnInit, OnDestroy {
  $subscription: Subscription;

  constructor(private  auth: AuthenticationService, private router: Router) {
  }

  @Output() onloginSuccess: EventEmitter<IUserProfile> = new EventEmitter<IUserProfile>();
  @Output() onloginFailure: EventEmitter<string> = new EventEmitter<string>();
  processing: boolean = false;

  authenticate(user: HTMLInputElement, password: HTMLInputElement) {
    /// Authenticate on server
    this.processing = true;
    this.$subscription = this.auth.authUser(user.value, password.value)
      .subscribe((res) => {
        console.log(res);
        if (res.success) {
          // emit Login Success Event
          this.onloginSuccess.emit(res.data[0]);
          this.auth.setCurrentUser(res.data[0], res.success);
          this.onloginFailure.emit(null);
          if(this.auth.redirectUrl)
          {
            this.router.navigateByUrl(this.auth.redirectUrl);
            this.auth.redirectUrl = null;
          }
          else{
            this.router.navigate(['/home']);
          }

        }
        else {
          // emit event if login fails
          this.onloginFailure.emit("Invalid User id or password provided please try again");
        }
        this.processing = false;
      }, errorObject =>{
        this.processing = false;
        this.onloginFailure.emit( "Internal server error. could not connect to server, plesase check your connection and try again!");
      });
    //console.log(this.currentUser);

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.$subscription && !this.$subscription.closed) {
      console.log('login Component Destroyed!!!');
      this.$subscription.unsubscribe();
    }
  }
}
