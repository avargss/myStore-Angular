import { Component, OnInit } from '@angular/core';
import { ProveedorService } from '../../service/providers.service';
import { Proveedor } from '../../models/proveedor';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './proveedor-list.component.html',
  styleUrl: './proveedor-list.component.css'
})
export class ProveedorListComponent implements OnInit {

  items : Proveedor[] = [];

  constructor(private providerService : ProveedorService){}
  
  ngOnInit(): void {
   this.providerService.getProveedores().subscribe( data => {
      this.items = data;
      console.log(data)
   });
  }

}
