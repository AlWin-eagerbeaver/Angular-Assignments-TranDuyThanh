import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventComponent } from './_ngay1809/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './_ngay1809/service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalogComponent } from './_ngay1809/product-catalog/product-catalog';
import { GroupCustomers } from './_ngay1809/group-customers/group-customers';
const routes: Routes = [
  { path: 'bai-13', component: ServiceProductImageEventComponent },
  { path: 'service-product-image-event/:id', component: ServiceProductImageEventDetailComponent },
  
  { path: 'bai-14', component: ProductCatalogComponent },
  { path: 'bai-18', component: GroupCustomers },

  { path: '', redirectTo: 'bai-13', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }