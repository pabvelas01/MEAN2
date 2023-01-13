import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url ="http://localhost:4000/api/rol";

  constructor(private http: HttpClient) { }

  // como es una peticion es un observable como las promise
  getProductos(): Observable<any>{
    return this.http.get(this.url);
  }
}
