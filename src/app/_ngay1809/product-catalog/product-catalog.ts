import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../Service/catalog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  styleUrl: './product-catalog.css',
  templateUrl: './product-catalog.html',
})
export class ProductCatalogComponent implements OnInit {
  public categories: any[] = [];
  public selectedCategory: any = null;

  constructor(
    private catalog: CatalogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories = this.catalog.getCategories();
    
    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0];
    }
  }

  onCategoryChange(cateId: string): void {
    this.selectedCategory = this.categories.find(c => c.Cateid === cateId);
  }

  viewDetail(product: any): void {
    this.router.navigate(['service-product-image-event', product.ProductId]);
  }
}
