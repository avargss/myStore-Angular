import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../models/products';
import { CartService } from '../../service/cart.service';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    standalone: false
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    if (!routeParams) {
      alert('No product id found in route');
    }

    this.cartService.mapeoDeProductos().subscribe(listaProductos => {
      this.product = listaProductos.find(product => product.id === productIdFromRoute);
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
