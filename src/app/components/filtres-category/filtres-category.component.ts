import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filtres-category',
  templateUrl: './filtres-category.component.html',
  styleUrls: ['./filtres-category.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltresCategoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
