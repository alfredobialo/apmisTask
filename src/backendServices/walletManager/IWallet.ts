import {IWalletTransaction} from './IWalletTransaction';
import {ICurrencyValue} from './ICurrencyValue';
import {IUserProfile} from '../userManager/IUserProfile';

export interface  IWallet
{
    walletId  : string;
    dateCreate  : Date;
    owner  : IUserProfile;
    transactions?  : Array<IWalletTransaction>;
    currentBal : ICurrencyValue;
    pin : number;
}
