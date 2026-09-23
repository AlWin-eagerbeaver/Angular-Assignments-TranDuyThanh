import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductService } from './product';
import { provideBrowserGlobalErrorListeners } from '@angular/core';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail';
import { ProductCatalogComponent } from './product-catalog/product-catalog';
import { CatalogService } from './catalog';
import { GroupCustomers } from './group-customers/group-customers';

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
