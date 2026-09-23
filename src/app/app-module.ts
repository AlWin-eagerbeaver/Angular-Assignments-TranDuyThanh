import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductService } from './_ngay1809/Service/product';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { ServiceProductImageEventComponent } from './_ngay1809/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './_ngay1809/service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalogComponent } from './_ngay1809/product-catalog/product-catalog';
import { CatalogService } from './_ngay1809/Service/catalog';
import { GroupCustomers } from './_ngay1809/group-customers/group-customers';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    ProductCatalogComponent,
    GroupCustomers,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [ProductService, CatalogService, provideBrowserGlobalErrorListeners(),provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
