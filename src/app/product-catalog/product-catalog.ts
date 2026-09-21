import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog';
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
    // 1. Gọi hàm getCategories() đúng cấu trúc thầy cho
    this.categories = this.catalog.getCategories();
    
    // 2. Mặc định chọn danh mục đầu tiên
    if (this.categories.length > 0) {
      this.selectedCategory = this.categories[0];
    }
  }

  // 3. Xử lý khi người dùng chọn danh mục khác từ thẻ select
  onCategoryChange(cateId: string): void {
    this.selectedCategory = this.categories.find(c => c.Cateid === cateId);
  }

  // 4. Sự kiện xem chi tiết sản phẩm (kết nối với Router Bài 13)
  viewDetail(product: any): void {
    this.router.navigate(['service-product-image-event', product.ProductId]);
  }
}
