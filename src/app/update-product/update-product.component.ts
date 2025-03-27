import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  standalone: false,
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  form!: FormGroup;
  product!: Product;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private productService: ProductService){
    route.data.subscribe(res=>{
      this.product = res["product"]

      this.form = fb.group({
        id: {value: this.product.id, disabled: true},
        title: [this.product.title, Validators.required],
        description: [this.product.description],
        price: [this.product.price, [Validators.min(1), Validators.max(999999), Validators.pattern('[1-9]*.[1-9]*')]],
        category: [this.product.category, [Validators.minLength(3), Validators.required]]
      })

    })

  }

  submit(): void{
    this.productService.updateProduct(this.product.id, this.form.value).subscribe(res=>{
      console.log(res);
      alert("Sikeres mentés");
      this.form.reset();
    });
  }
}
