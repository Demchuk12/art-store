import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {fadeIn} from 'ng-animate';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass'],
  animations: [
    trigger('fadeIn', [transition(':enter', useAnimation(fadeIn))])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutUsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
