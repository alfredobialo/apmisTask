export interface IApiResponse<T>
{
    total?:number;
    limit?:number;
    skip? : number;
    data  : T;
    success : boolean,
    message: string
  /*
   we could extend this interface to include a criteria object that include a
   pagination , other attributes being sent to the server for processing,
   an extra data and more

  * */
}
