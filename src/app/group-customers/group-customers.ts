import { Component, OnInit } from '@angular/core';
import { CustomerHttp } from '../customer-http';


@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrls: ['./group-customers.css']
})
export class GroupCustomers implements OnInit {
  customerGroups: any;
  errMessage: string = '';

  constructor(private _service: CustomerHttp) {}

  ngOnInit(): void {
    console.log("1. Đã bắt đầu chạy Component Group Customers!"); 
    
    this._service.getGroupCustomers().subscribe({
      next: (data: any) => { 
  console.log("2. Đã lấy được dữ liệu JSON:", data);
  this.customerGroups = data; 
      },
      error: (err: any) => { 
        console.error("2. Có lỗi xảy ra trong lúc lấy JSON:", err); 
        this.errMessage = err.message || "Lỗi không xác định"; 
      }
    });
  }
}