import { Component } from '@angular/core';
import { CustomerHttp } from '../customer-http';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrls: ['./group-customers.css']
})
export class GroupCustomers {
  customerGroups: any;
  errMessage: string = '';

  constructor(private _service: CustomerHttp) {
    
    this._service.getGroupCustomers().subscribe({
      next: (data) => { this.customerGroups = data; },
      error: (err) => { this.errMessage = err.message || err; }
    });
  }
}