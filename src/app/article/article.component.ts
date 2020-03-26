import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article : Article;

  constructor() {  }

  voteUp(){
    this.article.votes += 1;
    return false;
  }

  voteDown(){
    this.article.votes -= 1;
    return false;
  }

  ngOnInit() {
  }

}
