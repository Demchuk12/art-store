import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PaintingCategoryComponent} from './painting-category.component';
import {NgxsModule} from '@ngxs/store';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {Painting} from '../../models/painting.model';

describe('PaintingCategoryComponent', () => {
  let component: PaintingCategoryComponent;
  let fixture: ComponentFixture<PaintingCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]), HttpClientModule, RouterModule.forRoot([])],
      declarations: [PaintingCategoryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PaintingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value inCart should be true when painting is added to cart', () => {
    let painting: Painting = {
      author: '', id: 0, img: '', inCart: false, name: '', price: 0, quantity: 0, year: 0
    };
    component.addToCart(painting);
    expect(painting.inCart).toBeTruthy();
    expect(painting.quantity).toBe(1);
  });
});
