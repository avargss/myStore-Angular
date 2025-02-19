import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from '../models/proveedor';
import { Product, products } from '../models/products';
import { catchError, concatMap, Observable, of } from 'rxjs';
import { Proveedor2 } from '../models/proveedor2';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  proveedor: Proveedor[] = [];

  private url1 = "http://localhost:3000/proveedores";
  private url2 = "http://localhost:3000/proveedores2";

  constructor(private http: HttpClient) { }

  getProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url1);
  }

  getProveedores2(): Observable<Proveedor2[]> {
    return this.http.get<Proveedor2[]>(this.url2);
  }

  getAllProducts(): Observable<(Product | Proveedor2)[]> {
    return this.getProveedores2().pipe(
      catchError(() => of([])),
      concatMap(proveedores2 => {
        const productsFromProveedores2 = proveedores2.map(p => ({
          id: p.product_id,
          name: p.product_name,
          price: p.cost,
          description: p.details,
          proveedor: { id: Number(p.supplier), nombre: `Proveedor ${p.supplier}` }
        }));
        return of([...products, ...productsFromProveedores2]);
      })
    );
  }

  getProductProvider(providerId : number) : Product[] | undefined{
    return products.filter(p=> p.proveedor.id === providerId);
  }

}