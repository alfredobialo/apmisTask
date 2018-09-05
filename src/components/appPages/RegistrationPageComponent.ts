
import {Component, OnInit} from '@angular/core';
import {setPageMeta, setPageTitle} from './_pageMetadata';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'registration-page',
  template: `
    <register-ui>
      
    </register-ui>
  `
})

export class RegistrationPageComponent implements OnInit {
  constructor(private title: Title, private meta : Meta) {
    setPageTitle("Register and start earning money in your wallet", title);
    setPageMeta("Apimis Task Registration page. Create a wallet and transfer & receive funds to parties","description",meta);
  }

  ngOnInit() {
  }
}
