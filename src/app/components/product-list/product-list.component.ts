import { Component } from '@angular/core';
import { Product } from '../../models/products';
import { CartService } from '../../service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: false
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private cartService: CartService) {
    this.cartService.mapeoDeProductos().subscribe(productosMapeados => {
      this.products = productosMapeados;
    });
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}