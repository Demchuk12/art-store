import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {transition, trigger, useAnimation} from '@angular/animations';
import {zoomIn} from 'ng-animate';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  animations: [
    trigger('zoomIn', [transition(':enter', useAnimation(zoomIn, {
      params: {
        timing: 2
      }
    }))])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MainComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
