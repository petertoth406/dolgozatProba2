import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-read-product',
  standalone: false,
  templateUrl: './read-product.component.html',
  styleUrl: './read-product.component.css'
})
export class ReadProductComponent {
  form!: FormGroup;
  product!: Product;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private productService: ProductService){
    route.data.subscribe(res=>{
      this.product = res["product"]

      this.form = fb.group({
        id: {value: this.product.id, disabled: true},
        title: {value: this.product.title, disabled: true},
        description: {value: this.product.description, disabled: true},
        price: {value: this.product.price, disabled: true},
        category: {value: this.product.category, disabled: true}
      })

    })

  }
}
