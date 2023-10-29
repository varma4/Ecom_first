import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any[] = [];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.getCartItems()
  }

  getCartItems(){
    this.service.getcartProducts().subscribe((val) => {
      console.log(val);
      this.items = val.cartItems;
      console.log(val.cartItems);
    });
  }

  removeItem(item: any) {
    console.log(item);
    this.service.removeFromCart(item._id).subscribe((res) => {
      console.log(res);
      this.getCartItems()
    });
  }
}
