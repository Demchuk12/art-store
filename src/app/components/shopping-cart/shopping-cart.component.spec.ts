import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxsModule} from '@ngxs/store';
import {ShoppingCartComponent} from './shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import {Painting} from '../../models/painting.model';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([]), HttpClientModule],
      declarations: [ShoppingCartComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create form with 8 controls', () => {
    expect(component.form.contains('firstName')).toBeTruthy();
    expect(component.form.contains('lastName')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
    expect(component.form.contains('address')).toBeTruthy();
    expect(component.form.contains('country')).toBeTruthy();
    expect(component.form.contains('phoneNumber')).toBeTruthy();
    expect(component.form.contains('city')).toBeTruthy();
    expect(component.form.contains('zip')).toBeTruthy();
  });

  it('should mark required controls as invalid if empty value', () => {
    let firstName = component.form.get('firstName');
    let lastName = component.form.get('lastName');
    let email = component.form.get('email');
    let address = component.form.get('address');
    let country = component.form.get('country');
    let phoneNumber = component.form.get('phoneNumber');
    let city = component.form.get('city');
    let zip = component.form.get('zip');

    firstName?.setValue('');
    lastName?.setValue('');
    email?.setValue('');
    address?.setValue('');
    country?.setValue('');
    phoneNumber?.setValue('');
    city?.setValue('');
    zip?.setValue('');

    expect(firstName?.valid).toBeFalsy();
    expect(lastName?.valid).toBeFalsy();
    expect(email?.valid).toBeFalsy();
    expect(address?.valid).toBeFalsy();
    expect(country?.valid).toBeFalsy();
    expect(phoneNumber?.valid).toBeFalsy();
    expect(city?.valid).toBeFalsy();
    expect(zip?.valid).toBeFalsy();
  });

  it('decrement painting quantity', () => {
    let painting: Painting = {
      author: '', id: 0, img: '', inCart: false, name: '', price: 0, quantity: 3, year: 0,
    };
    component.decrementPainting(painting);
    expect(painting.quantity).toBe(2);
  });

  it('should call remove function if quantity = 1', () => {
    let painting: Painting = {
      author: '', id: 0, img: '', inCart: false, name: '', price: 0, quantity: 1, year: 0,
    };
    spyOn(component, 'removePainting');
    component.decrementPainting(painting);
    expect(component.removePainting).toHaveBeenCalled();
  });

  it('increment painting quantity', () => {
    let painting: Painting = {
      author: '', id: 0, img: '', inCart: false, name: '', price: 0, quantity: 3, year: 0,
    };
    component.incrementPainting(painting);
    expect(painting.quantity).toBe(4);
  });

  it('total price should be 0 if no paintings in cart', () => {
    expect(component.totalPrice).toBe(0);
  });

  it('total price should be 10', () => {
    component.paintingsInCart = [{
      author: '', id: 0, img: '', inCart: false, name: '', price: 10, quantity: 1, year: 0,
    }];
    expect(component.totalPrice).toBe(10);
  });

  it('total price should be 30', () => {
    component.paintingsInCart = [{
      author: '', id: 0, img: '', inCart: false, name: '', price: 10, quantity: 3, year: 0,
    }];
    expect(component.totalPrice).toBe(30);
  });

  it('total price should be 60', () => {
    component.paintingsInCart = [{
      author: '', id: 0, img: '', inCart: false, name: '', price: 10, quantity: 3, year: 0,
    }, {
      author: '', id: 0, img: '', inCart: false, name: '', price: 10, quantity: 3, year: 0,
    }];
    expect(component.totalPrice).toBe(60);
  });
});
