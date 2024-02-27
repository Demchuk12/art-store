import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AsideBlockComponent} from './aside-block.component';
import {NgxsModule} from '@ngxs/store';

describe('AsideBlockComponent', () => {
  let component: AsideBlockComponent;
  let fixture: ComponentFixture<AsideBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      declarations: [AsideBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AsideBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value lessCategories should be false when categories are toggled', () => {
    component.toggleCategories();
    expect(component.lessCategories).toBeFalsy();
  });

});
