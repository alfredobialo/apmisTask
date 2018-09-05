import {IWallet} from "./IWallet";
import {ICurrencyValue} from './ICurrencyValue';

export const TRANSACTION_STATUS ={

};

export interface IWalletTransaction
{
    id : string;
    fromWallet  : IWallet;
    toWallet  : IWallet;
    status? : string ;
    date : Date;
    description? :  string;
    amount : ICurrencyValue;
 }
