import { Component, OnInit} from '@angular/core';
import { Proveedor } from '../../models/proveedor';
import { ActivatedRoute } from '@angular/router';
import { ProveedorService } from '../../service/providers.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './proveedor-detail.component.html',
  styleUrl: './proveedor-detail.component.css'
})
export class ProveedorDetailComponent implements OnInit {

  proveedor?: Proveedor;

  constructor(private route: ActivatedRoute, private providerService : ProveedorService){}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const providerIdFromRoute = Number(routeParams.get('providerId'));

    this.providerService.getProveedores().subscribe( data => {
      this.proveedor = data.find(p => Number(p.id) === providerIdFromRoute);
      console.log(this.proveedor);
    });
  }

}
