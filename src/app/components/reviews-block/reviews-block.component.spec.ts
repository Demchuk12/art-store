import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NgxsModule} from '@ngxs/store';
import {ReviewsBlockComponent} from './reviews-block.component';

describe('ReviewBlockComponent', () => {
  let component: ReviewsBlockComponent;
  let fixture: ComponentFixture<ReviewsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([])],
      declarations: [ReviewsBlockComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
