import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  id: string;

  @Input() product;

  constructor(
    private productServ: ProductService,
  ) {
  }

  ngOnInit(): void {
  }

  addProduct(product) {
    this.productServ.addProduct(product)
  }

}
