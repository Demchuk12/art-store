import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PhoneFormatPipe} from '../../pipes/phone-format.pipe';
import {TooltipDirective} from '../../directives/tooltip.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      declarations: [HeaderComponent, PhoneFormatPipe, TooltipDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain message \'Shopping cart is empty\'', () => {
    component.shoppingCartText$.subscribe(
      text => expect(text).toContain('Shopping cart is empty')
    );
  });
});
