import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductResponse } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<ProductResponse>('https://dummyjson.com/products?limit=10');
  }
  getProductById(id: string){
    return this.http.get<ProductResponse>('https://dummyjson.com/products/' + id);
  }
  updateProduct(id: number, body: any){
    return this.http.patch<any>('https://dummyjson.com/products/' + id, body);
  }
}
