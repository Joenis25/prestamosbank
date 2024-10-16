import { Component, OnInit } from '@angular/core';
import { PrestamoI } from '../../../models/prestamo';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PrestamoService } from '../../../services/prestamo.service'

@Component({
  selector: 'app-mostrar-prestamo',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-prestamo.component.html',
  styleUrl: './mostrar-prestamo.component.css'
})
export class MostrarPrestamoComponent implements OnInit{
  public prestamos:PrestamoI[] = []
  constructor(
    private prestamoService: PrestamoService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarPrestamos()
  }
  mostrarPrestamos() {
    this.prestamoService.getAllPrestamo().subscribe({
        next: (data) => {
          this.prestamos = data.prestamos
           console.log(data)
        }
      })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/prestamos');
    this.prestamoService.deletePrestamo(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Sucursales Eliminado', life:5000});
        this.mostrarPrestamos();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/prestamos');
      }
    );
  }

}
