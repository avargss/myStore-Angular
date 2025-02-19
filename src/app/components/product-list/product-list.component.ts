import { Component, OnInit } from '@angular/core';
import { Product, products } from '../../models/products';
import { Proveedor2 } from '../../models/proveedor2';
import { ProveedorService } from '../../service/providers.service';

interface mostrarProducto {
  id: number;
  name: string;
  description: string;
  price: number;
  proveedor: { id: number; nombre: string };
}

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: false
})
export class ProductListComponent implements OnInit {
  products: mostrarProducto[] = [];
  errorMessage: string | null = null;

  constructor(private proveedorService: ProveedorService) {}

  ngOnInit(): void {
    this.proveedorService.getAllProducts().subscribe(
      (datos) => {
        this.products = datos.map(product => ({
          id: 'id' in product ? product.id : product.product_id,
          name: 'name' in product ? product.name : product.product_name,
          description: 'description' in product ? product.description : product.details,
          price: 'price' in product ? product.price : product.cost,
          proveedor: 'proveedor' in product ? product.proveedor : { id: Number(product.supplier), nombre: `Proveedor ${product.supplier}` }
        }));
      },
      (error) => {
        this.errorMessage = 'Error al cargar los productos.';
      }
    );
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}