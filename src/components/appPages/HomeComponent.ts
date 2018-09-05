import {Component, OnInit} from '@angular/core';
import { setPageTitle, setPageMeta } from './_pageMetadata';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'home-page',
  template: `
    <div class="bg-white row ">
      <div class="col-12">
        <div class="p-4 w-100 h-75">
          <h1>Home Page!!</h1>
          <user-profile-ui></user-profile-ui>
        </div>
       
      </div>
      
    </div>
    
  `
})

export class HomePageComponent implements OnInit {
  constructor(private title:Title, private meta:Meta) {
  }

  ngOnInit() {
    setPageTitle("Login to Continue", this.title);
    setPageMeta("Apimis Task Login page","description",this.meta);
  }
}
