import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService { 
  datas = [ 
    {
      "Cateid": "cate1",
      "CateName": "nuoc ngot", 
      "Products": [ 
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "assets/h1.jpg" }, 
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "assets/h2.jpg" }, 
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "assets/h3.png" } 
      ] 
    }, 
    {
      "Cateid": "cate2",
      "CateName": "Bia", 
      "Products": [ 
        { "ProductId": "p4", "ProductName": "Heleiken", "Price": 500, "Image": "assets/h4.jpg" }, 
        { "ProductId": "p5", "ProductName": "333", "Price": 400, "Image": "assets/h5.webp" }, 
        { "ProductId": "p6", "ProductName": "Sai Gon", "Price": 600, "Image": "assets/h6.jpg" } 
      ] 
    } 
  ];
   
  constructor() { } 

  // Hàm trả về toàn bộ dữ liệu Danh mục kèm danh sách Sản phẩm lồng bên trong
  getCategories() { 
    return this.datas;     
  } 
}