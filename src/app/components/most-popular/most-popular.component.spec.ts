import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MostPopularComponent} from './most-popular.component';
import {NgxsModule} from '@ngxs/store';
import {HttpClientModule} from '@angular/common/http';
import {PaintingsState} from '../../state/paintings.state';
import {RouterModule} from '@angular/router';

describe('MostPopularComponent', () => {
  let component: MostPopularComponent;
  let fixture: ComponentFixture<MostPopularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([PaintingsState]), HttpClientModule, RouterModule.forRoot([])],
      declarations: [MostPopularComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
