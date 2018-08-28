import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model'

@Component({
  selector: 'app-article-component',
  templateUrl: './article-component.component.html',
  styleUrls: ['./article-component.component.css']
})
export class ArticleComponentComponent implements OnInit {

   @Input() title : string;
  link : string; 

  constructor() { 
    this.title = 'GIT';
    this.link = 'https://github.com/';
  }
  
/* 
  @Input() art : Article;

  constructor(){
    this.art = new Article('GIT','https://github.com/');
  }  */
  ngOnInit() {
  }

}
