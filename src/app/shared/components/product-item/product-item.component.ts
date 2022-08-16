import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductData } from '@core/models/interfaces/product-data';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent{
  @Input() data: ProductData | undefined;
  // @Output() readMoreAction = new EventEmitter();

}
