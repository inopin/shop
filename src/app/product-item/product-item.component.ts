import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  id: string;

  @Input() product;

  constructor() { }

  ngOnInit(): void {
    this.id = this.product.id;
    console.log(this.product.id, this.product.information);
  }

}
