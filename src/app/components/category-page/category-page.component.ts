import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {PaintingsState} from '../../state/paintings.state';
import {GetPaintingsByCategory} from '../../actions/painting.actions';
import {Painting} from '../../models/painting.model';
import {Title} from '@angular/platform-browser';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.sass'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn, {
      params: {
        timing: 2
      }
    }))])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  @Select(PaintingsState.selectPaintingsByCategoryState) paintings$!: Observable<Painting[]>;
  @Select(PaintingsState.loading) loading!: Observable<boolean>;
  @Select(PaintingsState.loaded) loaded!: Observable<boolean>;
  private subscription!: Subscription;
  grid = true;

  constructor(private store: Store,
    private route: ActivatedRoute,
    public title: Title) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.store.dispatch(new GetPaintingsByCategory(params['category']));
      let title = params['category'];
      this.title.setTitle(title[0].toUpperCase() + title.slice(1));
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
