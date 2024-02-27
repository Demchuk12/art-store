import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {filter, Observable, Subscription, take} from 'rxjs';
import {AddArticleComment, GetArticleById, GetArticleComments} from '../../actions/article.actions';
import {ArticleState} from '../../state/article.state';
import {Article, Comment} from '../../models/article.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.sass'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {
      params: {
        timing: 1
      }
    }))]),
  ],
})
export class ArticlePageComponent implements OnInit, OnDestroy {

  @Select(ArticleState.selectArticleById) article$!: Observable<Article>;
  @Select(ArticleState.selectArticleCommentsState) articleComments$!: Observable<Comment[]>;
  @Select(ArticleState.selectArticleCommentsParentState) articleCommentsParent$!: Observable<Comment[]>;
  @Select(ArticleState.loading) loading!: Observable<Article[]>;
  @Select(ArticleState.loaded) loaded!: Observable<Article[]>;
  @Select(ArticleState.sendingComment) sendingComment!: Observable<boolean>;
  @Select(ArticleState.sendedComment) sendedComment!: Observable<boolean>;

  private subscription!: Subscription;
  form!: FormGroup;
  formReply!: FormGroup;

  constructor(private route: ActivatedRoute,
    private store: Store) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)
      ])
    });

    this.formReply = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      text: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)
      ])
    });

    this.subscription = this.route.params.pipe(take(1))
      .subscribe((params: Params) =>
        this.store.dispatch([new GetArticleById(params['id']), new GetArticleComments(+params['id'])])
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendComment(id: number) {
    if (this.form.valid) {
      const formData = {...this.form.value};
      formData.articleId = id;
      formData.clicked = false;
      formData.date = new Date();
      this.store.dispatch(new AddArticleComment(formData));
      this.sendedComment.pipe(filter(sendedComment => sendedComment), take(1))
        .subscribe(() => this.form.reset());
    }
  }
}
