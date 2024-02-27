import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-aside-block-category',
  templateUrl: './aside-block-category.component.html',
  styleUrls: ['./aside-block-category.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsideBlockCategoryComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
