import { Provider } from "./provider";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  proveedor:Provider;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    proveedor:{
      id: 1,
      nombre: "Proveedor 1"
    }
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    proveedor:{
      id: 2,
      nombre: "Proveedor 2"
    }
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    proveedor:{
      id: 3,
      nombre: "Proveedor 3"
    }
  }
];

