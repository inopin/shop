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
  rSub: Subscription;
  productName;

  constructor(
    private productServ: ProductService,
  ) {
  }

  ngOnInit(): void {
    this.pSub = this.productServ.getAll().subscribe(products => {

      this.products = products;
    });
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }
    if (this.rSub) {
      this.rSub.unsubscribe();
    }
  }

  remove(id) {
    this.rSub = this.productServ.remove(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
    });
  }

}
