import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestamoI } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/prestamos`

  constructor(
    private http:HttpClient
  ) { }

  getAllPrestamo():Observable<{prestamos:PrestamoI[]}>{
    return this.http
      .get<{prestamos:PrestamoI[]}>(this.base_path)
  }

  getOnePrestamo(id: number):Observable<{prestamos:PrestamoI[]}>{
    return this.http
      .get<{prestamos:PrestamoI[]}>(`${this.base_path}/${id}`)
  }



  createPrestamo(data: any):Observable<PrestamoI>{
    return this.http.post<PrestamoI>(this.base_path, data)
  }

  updatePrestamo(id: number, data: any): Observable<PrestamoI> {
    return this.http.put<PrestamoI>(`${this.base_path}/${id}`, data);
  }

  deletePrestamo(id: number): Observable<PrestamoI> {
    return this.http.delete<PrestamoI>(`${this.base_path}/${id}`);
  }
}
