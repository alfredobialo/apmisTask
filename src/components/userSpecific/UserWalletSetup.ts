import {Component, OnInit} from '@angular/core';
// This section should be protected with a garde
@Component({
  selector: 'user-wallet-setup-ui',
  template: `
      <div class="p-5 bg-white ">
        <h6 class="text-muted text-center ">Setup your Wallet, <p class="font-weight-bold text-info">get Free 5,000 NGN</p></h6>
        <hr>
        <form role="form" novalidate name="frmWallet" #frm="ngForm">
            <div class="row mb-2">
            <div class="col-4">
               Wallet Id
            </div>
            <div class="col-8">
              <input class="form-control-lg form-control"
                     placeholder="wallet Id will be auto generated"
                     type="text" name="txtWallet" maxlength="50" required [(ngModel)]="wallet">
            </div>
            </div>
          <div class="row mb-2">
            <div class="col-4">
              Currency Type
            </div>
            <div class="col-8">
              <select name="" id="" class="form-control-lg form-control">
                <option value="CASH">
                  Cash (Naira)
                </option>
                <option value="BITCOIN">
                  Bitcoin
                </option>
                <option value="ETHERUM">
                  Etherum
                </option>
              </select>
            </div>
          </div>
          <div class="row mb-2">
            <div class="col-4">
              Amount
            </div>
            <div class="col-8">
              <input class="form-control-lg form-control"
                     [disabled]="amount == 5000"
                     placeholder="wallet Id will be auto generated"
                     type="number" name="txtAmount" maxlength="9" required [(ngModel)]="amount">
            </div>
          </div>
          <div class="row mb-2">
          <div class="col-4">
           
          </div>
          <div class="col-8">
             <button class="btn btn-primary">Create Wallet</button>
          </div>
        </div>
        </form>
     
      </div>
  `
})

export class UserWalletSetupComponent implements OnInit {
  constructor() {
  }
    wallet: string ;
  amount:number = 5000.00;
  ngOnInit() {
  }
}
