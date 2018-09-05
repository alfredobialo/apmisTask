import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/Authenticator';

@Component({
  selector: 'user-profile-ui',
  template: `
      <div class="bg-white border " style="min-width: 500px;" *ngIf="authService.getCurrentUser.isAuthenticated">
        <div class="p-3 bg-secondary">
              <p class="lead text-white"> {{authService.getCurrentUser.user.userId}}
                <span class="float-right text-warning" (click)="editProfile()" style="font-size: 14px; cursor:pointer;">{{isEditMode  ? "X"  : "Edit"}}</span>
              </p>
        </div>
        <div class="p-4">
          <ng-template #editcontent>
              <div class="row">
              <div class="col-3">First Name</div>
              <div class="col-9">
                <input #f
                  [value]="authService.getCurrentUser.user.firstName"
                  type="text" class="form-control">
              </div>
              </div>
            <br>
            
            <div class="row">
              <div class="col-3">Last Name</div>
              <div class="col-9"><input #l
                [value]="authService.getCurrentUser.user.lastName"
                type="text" class="form-control"></div>
              </div>
            
            <div class="row mt-3">
              <div class="col-3">
                
              </div>
            <div class=" col-9">
              <button class="btn btn-primary" (click)="updateProfile(f,l)">
                  Save Changes
              </button>
              <button class="btn btn-link" (click)="editProfile()">
                Cancel
              </button>
            </div>
            </div>
          </ng-template>
          <div *ngIf="!isEditMode; else editcontent">
            <p class="" > {{authService.getCurrentUser.user.firstName}} {{authService.getCurrentUser.user.lastName}}</p>
            <button class="btn btn-danger btn-sm" (click)="authService.logoutCurrentUser()">Logout</button>  
          </div>
          
        </div>
      </div>
  `
})

export class UserProfileComponent implements OnInit {

isEditMode : boolean  = false;
//editText  : string  = this.isEditMode  ? "X"  : "Edit";
   constructor(public authService : AuthenticationService) {

  }
editProfile()
{
    this.isEditMode  = !this.isEditMode;
}
updateProfile(fname:HTMLInputElement, lname: HTMLInputElement )
{
  // executed when save changes is clicked
  if(this.authService.getCurrentUser.isAuthenticated)
  {
      // update
      const fields  = {userId  : this.authService.getCurrentUser.user.userId,
          firstName   : fname.value,lastName : lname.value
      };
      this.authService.updateUser(fields)
        .subscribe(x =>{
          // if successfull update the in-memory repsentation of a user profile
          this.authService.getCurrentUser.user.firstName = fname.value;
          this.authService.getCurrentUser.user.lastName = lname.value;
          this.editProfile();
          console.log(x);
        })
  }
}
  ngOnInit() {
     // this.authService.findUsers()
     //   .subscribe(response => {
     //     console.log(response);
     //   }, (error) =>{
     //     console.log("Error on API server", error);
     //   }, ()=>{
     //     console.log("COMPLETED !");
     //   })
  }
}
