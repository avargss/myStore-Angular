import { HttpClient } from '@angular/common/http';
import { Product, products } from '../models/products';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Products2 } from '../models/products2';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private items: Product[] = [];
  private itemsSubject = new BehaviorSubject<Product[]>([]);
  itemsObservable = this.itemsSubject.asObservable();

  productsUrl = 'http://localhost:3000/products2';

  constructor(private http: HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
    this.itemsSubject.next(this.items);
  }

  getItems() {
    return this.items;
  }

  getItemsFromJson() {
    return this.http.get<Products2[]>(this.productsUrl);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  mapeoDeProductos(): Observable<Product[]> {
    return this.getItemsFromJson().pipe(
      map(productos2 => {
        const productosMapeados = productos2.map(p => ({
          // Accedo a los campos de la interfaz Products y le asigno los valores de la interfaz Products2
          id: p.product_id,
          name: p.product_name,
          price: p.cost,
          description: p.details,
          proveedor: { id: Number(p.supplier), nombre: `Proveedor ${p.supplier}` }
        }));
        return [...products, ...productosMapeados];
      })
    );
  }

}
