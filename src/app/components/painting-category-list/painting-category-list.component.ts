import {Component, Input, OnInit} from '@angular/core';
import {Painting} from '../../models/painting.model';

@Component({
  selector: 'app-painting-category-list',
  templateUrl: './painting-category-list.component.html',
  styleUrls: ['./painting-category-list.component.sass']
})
export class PaintingCategoryListComponent implements OnInit {

  @Input() painting!: Painting;

  constructor() {
  }

  ngOnInit(): void {
  }
}
