import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; //need to import

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductsComponent } from '../admin/products/products.component';
import { CustomersComponent } from '../admin/customers/customers.component';
import {OrdersComponent } from '../admin/orders/orders.component';

import { SaleProductsComponent } from './sale-products/sale-products.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductsComponent,
    CustomersComponent,
    OrdersComponent,
    SaleProductsComponent,
    CategoryComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
