import {ComponentFixture, TestBed} from '@angular/core/testing';
import {GoodPageComponent} from './good-page.component';
import {RouterModule} from '@angular/router';
import {NgxsModule} from '@ngxs/store';
import {ReviewState} from '../../state/review.state';
import {HttpClientModule} from '@angular/common/http';
import {Painting} from '../../models/painting.model';

describe('GoodPageComponent', () => {
  let component: GoodPageComponent;
  let fixture: ComponentFixture<GoodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([ReviewState]), RouterModule.forRoot([]), HttpClientModule],
      declarations: [GoodPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 4 controls', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('score')).toBeTruthy();
    expect(component.form.contains('comment')).toBeTruthy();
  });

  it('should mark required controls as invalid if empty value', () => {
    let name = component.form.get('name');
    let email = component.form.get('email');
    let score = component.form.get('score');

    name?.setValue('');
    email?.setValue('');
    score?.setValue('');

    expect(name?.valid).toBeFalsy();
    expect(email?.valid).toBeFalsy();
    expect(score?.valid).toBeFalsy();
  });

  it('should have title', () => {
    expect(component.title).toBeTruthy();
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
