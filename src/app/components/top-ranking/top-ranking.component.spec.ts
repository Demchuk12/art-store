import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxsModule} from '@ngxs/store';

import {TopRankingComponent} from './top-ranking.component';
import {PaintingsState} from '../../state/paintings.state';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

describe('TopRankingComponent', () => {
  let component: TopRankingComponent;
  let fixture: ComponentFixture<TopRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([PaintingsState]), HttpClientModule, RouterModule.forRoot([])],
      declarations: [TopRankingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TopRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
