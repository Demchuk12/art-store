import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  tags = [
    'Realism',
    'Expressionism',
    'Photorealism',
    'Expressionism',
    'Impressionism',
    'Abstract',
    'Surrealism',
    'Pop-Art',
    'Modernism',
    'Cubism',
    'Oil',
    'Watercolor',
    'Pastel',
    'Acrylic',
    'Ink',
    'Gouache',
    'Enamel'
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
