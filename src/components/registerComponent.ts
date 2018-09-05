import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/Authenticator';
import {Router} from '@angular/router';

@Component({
  selector: 'register-ui',
  template: `
    <div class="p-5 bg-white shadow-sm " style="width: 600px;">
      <p class="p-2 mb-2 lead text-muted">New Registration</p>
     <form novalidate class="" (submit)="submitRegform(frm, $event)" role="form" name="frmRegister" #frm="ngForm"> <div class="p-4">
        <div class="row">
          
          <div class="col-3">
            <p>User Id</p>

          </div>
          <div class="col-9"><input type="text"  [(ngModel)]="userId" name="userId" required maxlength="30"   class="form-control"></div>
        </div>
        <div class="row">
          <div class="col-3">
            <p>First Name</p>

          </div>
          <div class="col-9"><input type="text"  [(ngModel)]="firstName" name="firstName"   required maxlength="50" class="form-control"></div>
        </div>
        <div class="row">
          <div class="col-3">
            <p>Last Name</p>

          </div>
          <div class="col-9"><input type="text"  [(ngModel)]="lastName"   required maxlength="50" name="lastName"  class="form-control"></div>
        </div>
        <div class="row">
          <div class="col-3">
            <p>Password</p>

          </div>
          <div class="col-9"><input type="password" [(ngModel)]="password" name="password"  required maxlength="30"   class="form-control"></div>
        </div>
        <div class="row mt-3">
          <div class="col-3">
            

          </div>
          <div class="col-9"><button class="btn btn-primary">Register</button></div>
        </div>
      </div></form>
    </div>
  `
})
export class RegisterComponent implements OnInit {
  firstName : string;
  lastName : string ;
  userId : string;
  password : string ;
  constructor(private router : Router, private  authService : AuthenticationService) {
  }

  ngOnInit() {
  }
  submitRegform(frm , evt : Event)
  {
    evt.preventDefault();
    console.log(frm);
    console.log(frm.form.value);
    console.log(frm.form.valid);
    // validate input ( POOR validation logic
    if(frm.form.valid)
    {
      // register user
            this.authService.registerUser(frm.form.value)
              .subscribe( (response : any) => {
                 if(response.success)
                 {
                   this.authService.setCurrentUser(frm.form.value,true);
                   this.router.navigate(["/home"]);
                 }
              });

            this.authService.setCurrentUser(frm.form.value,true);
            this.router.navigate(["/home"]);
    }
  }



}
