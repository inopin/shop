import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashbord-page',
  templateUrl: './dashbord-page.component.html',
  styleUrls: ['./dashbord-page.component.scss']
})
export class DashbordPageComponent implements OnInit {

  products = [];
  pSub: Subscription;

  constructor(
    private productServ: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.pSub = this.productServ.getAll().subscribe(products => {
      console.log(products);
      this.products = products
    })
  }

  ngOnDestroy() {
if (this.pSub) {
  this.pSub.unsubscribe()
}
  }

}
