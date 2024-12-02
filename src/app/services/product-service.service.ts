import { Injectable } from '@angular/core';
import { Product } from '../model/product.interface';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private apiUrl = environment.urlBaseProducto;
  constructor(private http: HttpClient) {}

    // Obtener todos los productos
    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.apiUrl);
    }

    // Obtener un producto por ID
    getProduct(id: number): Observable<Product> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Product>(url);
    }

    // Crear un nuevo producto
    createProduct(product: Product): Observable<Product> {
      return this.http.post<Product>(this.apiUrl, product);
    }

    // Actualizar un producto
    updateProduct(product: Product): Observable<any> {
      const url = `${this.apiUrl}/${product.id}`;
      return this.http.put(url, product);
    }

    // Eliminar un producto
    deleteProduct(id: number): Observable<any> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.delete(url);
    }

}
