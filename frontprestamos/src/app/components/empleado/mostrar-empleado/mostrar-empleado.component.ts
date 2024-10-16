import { Component, OnInit } from '@angular/core';
import { EmpleadoI } from '../../../models/empleado';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EmpleadoService } from '../../../services/empleado.service'

@Component({
  selector: 'app-mostrar-empleado',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-empleado.component.html',
  styleUrl: './mostrar-empleado.component.css'
})
export class MostrarEmpleadoComponent implements OnInit{

  public empleados:EmpleadoI[] = []
  constructor(
    private empleadoService: EmpleadoService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarEmpleados()
  }
  mostrarEmpleados() {
    this.empleadoService.getAllEmpleado().subscribe({
        next: (data) => {
          this.empleados = data.empleados
           console.log(data)
        }
      })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/empleados');
    this.empleadoService.deleteEmpleado(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Sucursales Eliminado', life:5000});
        this.mostrarEmpleados();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/empleados');
      }
    );
  }
}
