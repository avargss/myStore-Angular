import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provider } from '../models/provider';
import { Product, products } from '../models/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  proveedor: Provider[] = [];

  private url1 = "http://localhost:3000/proveedores";

  constructor(private http: HttpClient) { }

  getProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(this.url1);
  }

  getProductProvider(providerId : number) : Product[] | undefined{
    return products.filter(p=> p.proveedor.id === providerId);
  }

}