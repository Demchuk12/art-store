import {Component, Input, OnInit} from '@angular/core';
import {Article} from '../../models/article.model';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.sass']
})
export class BlogArticleComponent implements OnInit {

  @Input() article!: Article;

  constructor() {
  }

  ngOnInit(): void {
  }

}
