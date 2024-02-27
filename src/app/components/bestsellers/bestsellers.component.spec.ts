import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxsModule} from '@ngxs/store';

import {BestsellersComponent} from './bestsellers.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

describe('BestsellersComponent', () => {
  let component: BestsellersComponent;
  let fixture: ComponentFixture<BestsellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]), HttpClientModule, RouterModule.forRoot([])],
      declarations: [BestsellersComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BestsellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
