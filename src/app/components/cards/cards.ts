import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,   
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit {
  products: any[] = [];

  constructor(
    private service: AppService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((res: any) => {
      this.products = res.products;  
      this.cdr.detectChanges();
      console.log(this.products);
    });
  }

  viewProduct(product: any) {
    this.router.navigate(['/product', product.id], { state: { product } });
  }
}