import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetail implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(() => {
      if (history.state && history.state.product) {
        this.product = history.state.product;
      }
    });
  }
}