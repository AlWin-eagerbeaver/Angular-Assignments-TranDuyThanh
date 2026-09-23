import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../Service/product';


@Component({
  selector: 'app-service-product-image-event',
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css'],
  standalone: false
})
export class ServiceProductImageEventComponent {
  public products: any;

  constructor(pservice: ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['service-product-image-event', f.ProductId]);
  }
}