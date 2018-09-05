import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {IWallet} from '../backendServices/walletManager/IWallet';
@Injectable({
  providedIn :'root'
})
export class WalletService
{
  private url : string  = environment.baseUrl;
    constructor(private http : HttpClient )
    {

    }

    createWallet (wallet : IWallet)
    {

    }

}
