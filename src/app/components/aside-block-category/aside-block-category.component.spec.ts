import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AsideBlockCategoryComponent} from './aside-block-category.component';

describe('AsideBlockCategoryComponent', () => {
  let component: AsideBlockCategoryComponent;
  let fixture: ComponentFixture<AsideBlockCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AsideBlockCategoryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AsideBlockCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
