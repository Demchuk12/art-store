import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {filter, Observable, Subscription, take} from 'rxjs';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Review} from '../../models/review.model';
import {Painting} from '../../models/painting.model';
import {Select, Store} from '@ngxs/store';
import {AddGoodReview, GetGoodReviews} from '../../actions/review.actions';
import {ReviewState} from '../../state/review.state';
import {AddPaintingToCart} from '../../actions/shopping-cart.actions';
import {PaintingsState} from '../../state/paintings.state';
import {GetPaintingsById} from '../../actions/painting.actions';
import {Meta, Title} from '@angular/platform-browser';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-good-page',
  templateUrl: './good-page.component.html',
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
  ],
  styleUrls: ['./good-page.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoodPageComponent implements OnInit, OnDestroy {

  @Select(PaintingsState.selectPaintingsByIdState) paintings$!: Observable<Painting[]>;
  @Select(ReviewState.selectGoodReviewsState) reviews$!: Observable<Review[]>;
  @Select(PaintingsState.loading) loading!: Observable<boolean>;
  @Select(ReviewState.sendingReview) sendingReview!: Observable<boolean>;
  @Select(PaintingsState.loaded) loaded!: Observable<boolean>;
  @Select(ReviewState.sendedReview) sendedReview!: Observable<boolean>;
  form!: FormGroup;
  private subscription!: Subscription;
  private paintingSubscription!: Subscription;

  constructor(private route: ActivatedRoute,
    private store: Store,
    public title: Title,
    public meta: Meta) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      score: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.maxLength(1000))
    });

    this.subscription = this.route.params.subscribe((params: Params) => {
      this.store.dispatch(new GetPaintingsById(params['id']));
    });

    this.paintingSubscription = this.paintings$
      .subscribe((paintings) => {
        if (paintings.length > 0) {
          this.store.dispatch(new GetGoodReviews(paintings[0].id));
          let title = paintings[0].name;
          this.title.setTitle(title);
          this.meta.addTags([
            {name: 'description', content: `This is ${title} component`}
          ]);
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.paintingSubscription.unsubscribe();
  }

  addToCart(painting: Painting) {
    painting.quantity = 1;
    painting.inCart = true;

    this.store.dispatch(new AddPaintingToCart(painting));
  }

  addReview(id: number) {
    if (this.form.valid) {
      const formData = {...this.form.value};
      formData.paintingId = id;

      this.store.dispatch(new AddGoodReview(formData));

      this.sendedReview.pipe(filter(sendedReview => sendedReview), take(1))
        .subscribe(() => this.form.reset());
    }
  }
}
