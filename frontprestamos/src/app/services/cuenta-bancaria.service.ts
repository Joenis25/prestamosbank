import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentaBancariaI } from '../models/cuentaBancaria';

@Injectable({
  providedIn: 'root'
})
export class CuentaBancariaService {
  api_uri_node = 'http://localhost:4000';
  base_path = `${this.api_uri_node}/clientes`

  constructor(
    private http:HttpClient
  ) { }

  getAllCuentaBancaria():Observable<{cuentaBancarias:CuentaBancariaI[]}>{
    return this.http
      .get<{cuentaBancarias:CuentaBancariaI[]}>(this.base_path)
  }

  getOneCuentaBancaria(id: number):Observable<{cuentaBancarias:CuentaBancariaI[]}>{
    return this.http
      .get<{cuentaBancarias:CuentaBancariaI[]}>(`${this.base_path}/${id}`)
  }



  createCuentaBancaria(data: any):Observable<CuentaBancariaI>{
    return this.http.post<CuentaBancariaI>(this.base_path, data)
  }

  updateCuentaBancaria(id: number, data: any): Observable<CuentaBancariaI> {
    return this.http.put<CuentaBancariaI>(`${this.base_path}/${id}`, data);
  }

  deleteCuentaBancaria(id: number): Observable<CuentaBancariaI> {
    return this.http.delete<CuentaBancariaI>(`${this.base_path}/${id}`);
  }
}
