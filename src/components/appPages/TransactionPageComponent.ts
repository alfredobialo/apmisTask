import {Component, OnInit} from '@angular/core';
import {setPageMeta, setPageTitle} from './_pageMetadata';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'transaction-page',
  template: `<div class="p-4 bg-white shadow" style="min-width: 700px">
    <h1 class="text-muted">Transaction Entry</h1>
    <p>Transactional Components goes here</p>
    <div class="row">
      <div class="col-7">
        <new-transaction-ui>
        </new-transaction-ui>
      </div>
      <div class="col-5">
        <userlist-ui>
        </userlist-ui>
      </div>
    </div>
  </div>`
})

export class TransactionPageComponent implements OnInit {
  constructor(private title: Title, private meta : Meta) {
    setPageTitle("Transact with money in your wallet", title);
    setPageMeta("Apimis Task Transaction page. Transfer & receive funds from parties","description",meta);
  }

  ngOnInit() {
  }
}
