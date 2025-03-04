import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../service/providers.service';
import { Provider } from '../../models/provider';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-provider-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './provider-list.component.html',
  styleUrl: './provider-list.component.css'
})
export class ProviderListComponent implements OnInit {

  items : Provider[] = [];

  constructor(private providerService : ProvidersService){}
  
  ngOnInit(): void {
   this.providerService.getProviders().subscribe( data => {
      this.items = data;
      console.log(data)
   });
  }

}
