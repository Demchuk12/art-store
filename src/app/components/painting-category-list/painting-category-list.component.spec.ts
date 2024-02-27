import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaintingCategoryListComponent } from './painting-category-list.component';

describe('PaintingCategoryListComponent', () => {
  let component: PaintingCategoryListComponent;
  let fixture: ComponentFixture<PaintingCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaintingCategoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaintingCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
