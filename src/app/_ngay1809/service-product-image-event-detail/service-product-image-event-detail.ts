import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../Service/product';

@Component({
  selector: 'app-service-product-image-event-detail',
  templateUrl: './service-product-image-event-detail.html',
  styleUrls: ['./service-product-image-event-detail.css'],
  standalone: false
})
export class ServiceProductImageEventDetailComponent {
  selectedProduct: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private _fs: ProductService,
    private router: Router
  ) {
    this.activateRoute.paramMap.subscribe((param) => {
      let id = param.get('id');
      if (id != null) {
        this.selectedProduct = this._fs.getProductDetail(id);
      }
    });
  }

  goBack(): void {    this.router.navigate(['/bai-13']);
  }
}