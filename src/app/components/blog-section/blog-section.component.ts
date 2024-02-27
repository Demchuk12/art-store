import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {ArticleState} from '../../state/article.state';
import {Observable} from 'rxjs';
import {Article} from '../../models/article.model';
import {GetArticles} from '../../actions/article.actions';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.sass']
})
export class BlogSectionComponent implements OnInit {

  @Select(ArticleState.selectArticlesState) articles$!: Observable<Article[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetArticles());
  }

}
