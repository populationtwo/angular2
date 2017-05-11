import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InventoryAppComponent } from './app.component';
import { ProductsListComponentComponent } from './products-list-component/products-list-component.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    InventoryAppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [InventoryAppComponent]
})
export class AppModule { }
