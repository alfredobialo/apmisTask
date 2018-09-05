import  {find, isNil} from 'lodash';
import {IApiResponse} from '../../services/IApiResponse';

export interface IUserProfile {
  userId: string;
  password: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
}

export class UserProfileStore {
  static _users: IUserProfile[] = [
    {
      userId: 'alfredobialo',
      password: 'fageco',
      firstName: 'Alfred',
      lastName: 'Obialo'
    },
    {
      userId: 'maryann',
      password: 'maryann',
      firstName: 'Maryann',
      lastName: 'Okafor'
    },
    {
      userId: 'chidi ',
      password: 'chidi',
      firstName: 'Chidi',
      lastName: 'Okoye'
    },
  ];
  static  getUser (id : string, password : string) :IApiResponse<IUserProfile>
  {
    const usrFromDb  =  find(this._users, (obj) => {
      return obj.userId  === id && obj.password === password;
    });
    if(!isNil(usrFromDb)){
      return {
        data  :  usrFromDb,
        success  :  true,
        message: "Login successful"
      }
    }

    const result  = {
      data  :  null,
      success  :  false,
      message: "Login Failed! user id or password may be entered incorrecly"
    };
    return result;

  }


}
