import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../shared/order.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss']
})
export class CardPageComponent implements OnInit {

  cartProducts = [];
  totalPrice = 0;
  added = '';

  form: FormGroup;
  submitted = false;

  constructor(
    private productServ: ProductService,
    private orderServ: OrderService,
  ) {
  }

  ngOnInit(): void {
    this.cartProducts = this.productServ.cartProducts;
    for (let i = 0; i < this.cartProducts.length; i++) {
      this.totalPrice += +this.cartProducts[i].price;
    }
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      payment: new FormControl('cash'),
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submitted = true;

    const order = {
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,
      payment: this.form.value.payment,
      orders: this.cartProducts,
      totalPrice: this.totalPrice,
      date: new Date()
    };

    this.orderServ.create(order).subscribe(res => {
      this.form.reset();
      this.added = 'Delivery framed';
      this.submitted = false;
    });
  }

  delete(product) {
    this.totalPrice -= +product.price;
    this.cartProducts.splice(this.cartProducts.indexOf(product), 1);

  }

}
