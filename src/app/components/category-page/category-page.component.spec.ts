import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NgxsModule} from '@ngxs/store';
import {CategoryPageComponent} from './category-page.component';
import {RouterModule} from '@angular/router';

describe('CategoryPageComponent', () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]), RouterModule.forRoot([])],
      declarations: [CategoryPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title', () => {
    expect(component.title).toBeTruthy();
  });
});
