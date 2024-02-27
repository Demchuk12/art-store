import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.sass'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareersComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
