
export const  CURRENCY_TYPE_CASH : string ="Cash";
export const  CURRENCY_TYPE_BITCOIN : string ="Bitcoin";
export const  CURRENCY_TYPE_ETHERUM : string ="Etherum";

export interface ICurrencyValue
{
   value  : number;
   type  : string   ; // Type can be of any, Cash, Bitcoin, Etherum etc
}


