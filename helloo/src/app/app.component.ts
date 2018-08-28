import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloo';
  link = 'link';
  addArticle(title: HTMLInputElement,link: HTMLInputElement){
    console.log(`adding : ${title.value} and ${link.value}`);
    this.title = title.value;
    return false;
  }
}
