import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FiltresCategoryComponent} from './filtres-category.component';

describe('FiltresCategoryComponent', () => {
  let component: FiltresCategoryComponent;
  let fixture: ComponentFixture<FiltresCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltresCategoryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FiltresCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
