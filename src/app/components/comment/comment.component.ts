import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../models/article.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddArticleComment} from '../../actions/article.actions';
import {Select, Store} from '@ngxs/store';
import {ArticleState} from '../../state/article.state';
import {filter, Observable, take} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent implements OnInit {

  @Input() comment!: Comment;
  @Select(ArticleState.sendingComment) sendingComment!: Observable<boolean>;
  @Select(ArticleState.sendedComment) sendedComment!: Observable<boolean>;
  articleCommentsChildren$!: Observable<Comment[]>;
  formReply!: FormGroup;

  constructor(private store: Store) {
    this.articleCommentsChildren$ = this.store
      .select(ArticleState.selectArticleCommentsChildrenState)
      .pipe(map(filterFn => filterFn(this.comment.id)));
  }

  ngOnInit(): void {
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
  }

  reply(comment: Comment) {
    const formDataReply = {...this.formReply.value};
    formDataReply.clicked = false;
    formDataReply.articleId = comment.articleId;
    formDataReply.parentId = comment.id;
    comment.clicked = false;
    this.store.dispatch(new AddArticleComment(formDataReply));
    this.sendedComment.pipe(filter(sendedComment => sendedComment), take(1))
      .subscribe(() => this.formReply.reset());
  }

}
