import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/Authenticator';
import { IUserProfile } from '../../backendServices/userManager/IUserProfile';


@Component({
    selector: 'userlist-ui',
    template: `
    <div class="p-2">
      <p class="text-primary font-weight-bold">Available Users</p>
        <hr />
     <div class="row mb-2" *ngFor="let u of users; let i = index;">
        <div class="col-8">
           {{u.firstName}} {{u.lastName}} 
        </div> 
        <div class="col-4">

        </div>
      </div>  
      
    </div>
    `
})

export class UserListComponent implements OnInit {
    constructor(private authService : AuthenticationService) { }
    
    users : IUserProfile[]  = [];
    // get every other user except the currenly logged in user
    private getUsers()
    {
        //get current user
        const currentUser  = this.authService.getCurrentUser.user;
        this.authService.findAllUser()
        .subscribe(x =>{
            console.log(x);  
            this.users  = x.data.filter(x => x.userId !== currentUser.userId);  
        });  
    }

    ngOnInit() {
        this.getUsers();
     }
}