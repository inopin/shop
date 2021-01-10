import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product$;

  constructor(
    private productServ: ProductService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(switchMap(params => {
        return this.productServ.getById(params.id);
      }));
    console.log(this.product$);
  }

}
