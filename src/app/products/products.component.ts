import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  products: Product[] = []

  constructor(private productService: ProductService, private router: Router){

  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res=>
      this.products = res.products)
  }
  nav(id: number, isRead = false): void{
    this.router.navigate([isRead ? '/products/read/' + id : '/products/update/' + id])
  }
}
