import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Customer} from '../../models/review.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent implements OnInit {
  @Input() customer!: Customer;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Customer Component initialized');
  }
}
