import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../model/product.interface';
import { ProductServiceService } from '../../services/product-service.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  productService = inject(ProductServiceService)

  constructor(){}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.error('Error al obtener los productos:', error);
      }
    );
  }

}
