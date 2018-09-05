import {Meta, Title} from '@angular/platform-browser';

export function setPageTitle(pageTitle : string ,  title : Title)  : void
{
   title.setTitle(pageTitle);
}
export function setPageMeta(content : string ,name : string,  meta : Meta)  : void
{
  meta.addTag({
    content ,
    name,

  }, false);
}
