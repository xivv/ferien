import { Component, OnInit, Input } from '@angular/core';
import { Price } from '../data/Price';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent {

  @Input() sparsaison: Price = {
    p2: 0,
    p34: 0,
    p56: 0,
    p78: 0
  };
  @Input() vorsaison: Price = {
    p2: 0,
    p34: 0,
    p56: 0,
    p78: 0
  };
  @Input() hauptsaison: Price = {
    p2: 0,
    p34: 0,
    p56: 0,
    p78: 0
  };

  constructor() { }

}
