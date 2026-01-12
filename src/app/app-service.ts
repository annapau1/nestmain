import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private url = "https://dummyjson.com/products?limit=30";  // you can add ?limit=0 for all ~194 products

  constructor(private h: HttpClient) {}

  public getProducts() {
    return this.h.get(this.url);
  }
}