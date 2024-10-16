import { Component, OnInit } from '@angular/core';
import { CuentaBancariaI } from '../../../models/cuentaBancaria';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CuentaBancariaService } from '../../../services/cuenta-bancaria.service'

@Component({
  selector: 'app-mostrar-cuenta-bancaria',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-cuenta-bancaria.component.html',
  styleUrl: './mostrar-cuenta-bancaria.component.css'
})
export class MostrarCuentaBancariaComponent implements OnInit{

  public cuentaBancaria:CuentaBancariaI[] = []
  constructor(
    private cuentaBancariaService: CuentaBancariaService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarCuentaBancaria()
  }
  mostrarCuentaBancaria() {
    this.cuentaBancariaService.getAllCuentaBancaria().subscribe({
        next: (data) => {
          this.cuentaBancaria = data.cuentaBancarias
           console.log(data)
        }
      })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/cuentas');
    this.cuentaBancariaService.deleteCuentaBancaria(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Sucursales Eliminado', life:5000});
        this.mostrarCuentaBancaria();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/cuentas');
      }
    );
  }

}
