import { Component, OnInit} from '@angular/core';
import { SucursalI } from '../../../models/Sucursal';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SucursalService } from '../../../services/sucursal.service'
@Component({
  selector: 'app-mostrar-sucursal',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-sucursal.component.html',
  styleUrl: './mostrar-sucursal.component.css'
})
export class MostrarSucursalComponent implements OnInit{
  public sucursales:SucursalI[] = []
  constructor(
    private sucursalService: SucursalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarSucursal()
  }
  mostrarSucursal() {
    this.sucursalService.getAllSucursal()
      .subscribe({
        next: (data) => {
          this.sucursales = data.sucursal
          console.log(data)
        }
    })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/sucursales');
    this.sucursalService.deleteSucursal(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Sucursal Eliminado', life:5000});
        this.mostrarSucursal();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/sucursales');

      }
    );
  }
}
