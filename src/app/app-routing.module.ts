import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ReadProductComponent } from './read-product/read-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductResolver } from './product.resolver';

const routes: Routes = [
  {path: "products", component: ProductsComponent, children:[
    { path: "read/:id", component: ReadProductComponent, resolve: {product: ProductResolver}},
    {path: "update/:id", component: UpdateProductComponent,  resolve: {product: ProductResolver}}
  ]},
  {path: '', redirectTo: "/products", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
