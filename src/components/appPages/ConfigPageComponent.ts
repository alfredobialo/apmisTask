import {Component, OnInit} from '@angular/core';
import {setPageMeta, setPageTitle} from './_pageMetadata';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'config-page',
  template: `
    <div class=" p-5 " style="min-width: 700px">
      <h1 class="text-muted">Configuration</h1>
      <hr>
      <div class="shadow-sm p-4 bg-white def-container-min-width ">
          <p class="lead">Wallet Configuration</p>
          <user-wallet-setup-ui></user-wallet-setup-ui>
      </div>
    </div>
  `
})

export class ConfigPageComponent implements OnInit {
  constructor(private title: Title, private meta : Meta) {
    setPageTitle("Configure your wallet", title);
    setPageMeta("Configuration page. Create a wallet profile","description",meta);
  }

  ngOnInit() {
  }
}
