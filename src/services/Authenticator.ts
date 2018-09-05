import {Injectable} from '@angular/core';
import {IUserProfile, UserProfileStore} from '../backendServices/userManager/IUserProfile';
import {IApiResponse} from './IApiResponse';
import {Observable, Observer} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {random} from 'lodash';

@Injectable({
  providedIn : 'root'
})
export class AuthenticationService {
    private  url: string  = environment.baseUrl;
    constructor(private http:HttpClient){}
    private currentUser : {user : IUserProfile , isAuthenticated: boolean };
    redirectUrl : string;
    setCurrentUser(user: IUserProfile, isAuthenticated : boolean =false):void
    {
        // create a new object that represents the current user
      // this should be called if authentication was successful
      this.currentUser  = {user,isAuthenticated};
    }
    get getCurrentUser() : {user : IUserProfile , isAuthenticated: boolean }
    {
      return this.currentUser || {user : null, isAuthenticated :false};
    }

    logoutCurrentUser()
    {
      this.setCurrentUser(null,false);
    }
    authUser(userId,  pwd) : Observable<IApiResponse<IUserProfile[]>>
    {
      return this.http.get<IApiResponse<IUserProfile[]>>(`${this.url}/users?userId=${userId}&password=${pwd}`);
     /// return this.http.get<IApiResponse<IUserProfile>>(this.url, {userId: userId , password : pwd});
      // const $observer  = Observable.create((obsr : Observer<IApiResponse<IUserProfile>>) =>{
      //   window.setTimeout(()=>{
      //     obsr.next(UserProfileStore.getUser(userId,pwd));
      //     obsr.complete();
      //   }, random(500,3000));
      //
      // });
      //  return $observer;
    }

    // Don't use yet
     findAllUser()
    {
        return  this.http.get<IApiResponse<IUserProfile[]>>(`${this.url}/users`);
    }
    getUser(userId:string) : Observable<IApiResponse<IUserProfile>>
    {
      return  this.http.get<IApiResponse<IUserProfile>>(`${this.url}/users?userId=${userId}`);
    }
    registerUser(userProfile : IUserProfile)
    {
      return  this.http.post(`${this.url}/users`,userProfile);
    }
    updateUser(userProfile : IUserProfile | {userId, firstName , lastName})
    {
      return  this.http.patch(`${this.url}/users?userId=${userProfile.userId}`,userProfile);
    }

}
