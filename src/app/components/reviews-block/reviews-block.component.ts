import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {GetReviews} from '../../actions/review.actions';
import {ReviewState} from '../../state/review.state';
import {Customer} from '../../models/review.model';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-reviews-block',
  templateUrl: './reviews-block.component.html',
  styleUrls: ['./reviews-block.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsBlockComponent implements OnInit {

  @Select(ReviewState.selectReviewsState) customers$!: Observable<Customer[]>;
  @Select(ReviewState.loading) loading!: Observable<boolean>;
  @Select(ReviewState.loaded) loaded!: Observable<boolean>;

  constructor(private store: Store) {
  }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    navSpeed: 700,
    stagePadding: 60,
    navText: ['<div class="nav-button owl-prev">‹</div>', '<div class="nav-button owl-next">›</div>'],
    items: 3,
    responsive: {
      479: {
        items: 1,
        stagePadding: 40,
        center: true
      },
      540: {
        items: 1,
        stagePadding: 80,
        center: true
      },
      580: {
        items: 1,
        stagePadding: 100,
        center: true
      },
      620: {
        items: 1,
        stagePadding: 120,
        center: true
      },
      690: {
        items: 1,
        stagePadding: 150,
        center: true
      },
      760: {
        items: 2,
        stagePadding: 0,
        center: true
      },
      880: {
        items: 2,
        stagePadding: 50,
        center: true
      },
      1069: {
        items: 2,
        stagePadding: 150
      },
      1167: {
        items: 2,
        stagePadding: 200,
      },
      1247: {
        items: 3
      },
    },
    nav: true
  };

  ngOnInit(): void {
    this.store.dispatch(new GetReviews());
  }
}
