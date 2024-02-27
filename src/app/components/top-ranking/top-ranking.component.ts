import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Select, Store} from '@ngxs/store';
import {PaintingsState} from '../../state/paintings.state';
import {GetPaintingsTopRanking} from '../../actions/painting.actions';
import {Painting} from '../../models/painting.model';

@Component({
  selector: 'app-top-ranking',
  templateUrl: './top-ranking.component.html',
  styleUrls: ['./top-ranking.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRankingComponent implements OnInit {

  @Select(PaintingsState.selectPaintingsTopRankingState) paintings$!: Observable<Painting[]>;
  @Select(PaintingsState.loading) loading!: Observable<boolean>;
  @Select(PaintingsState.loaded) loaded!: Observable<boolean>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetPaintingsTopRanking());
  }
}
