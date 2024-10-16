import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalService } from '../../../services/sucursal.service';
import { Router } from '@angular/router';
import { SucursalI } from '../../../models/sucursal';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { PrestamoService } from '../../../services/prestamo.service';
import { PrestamoI } from '../../../models/prestamo';

@Component({
  selector: 'app-crear-prestamo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-prestamo.component.html',
  styleUrl: './crear-prestamo.component.css'
})
export class CrearPrestamoComponent implements OnInit{

  public form: FormGroup; // Declaración de la propiedad form
  prestamoService = inject(PrestamoService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // Inicialización del formulario en el constructor
    this.form = this.formBuilder.group({
      clienteId: ['', [Validators.required]],
      empleadoId: ['', [Validators.required]],
      fechaPrestamo: ['', [Validators.required]],
      tipoPrestamo: ['', [Validators.required]],
      monto: ['', [Validators.required]],
      interes: ['', [Validators.required]],
      estado: ['', [Validators.required]],

    });
  }
  ngOnInit(): void { }
  onSubmit(): void {
    const formValue: PrestamoI = this.form.value;
    console.log(formValue);
    this.prestamoService.createPrestamo(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('prestamos');
      },
      (      err: any) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/prestamos');
  }
  // Asegúrate de que los nombres de los controles de formulario sean correctos
  get clienteId() { return this.form.get('clienteId'); }
  get empleadoId() { return this.form.get('empleadoId'); }
  get fechaPrestamo() { return this.form.get('fechaPrestamo'); }
  get tipoPrestamo() { return this.form.get('tipoPrestamo'); }
  get monto() { return this.form.get('monto'); }
  get interes() { return this.form.get('interes'); }
  get estado() { return this.form.get('estado'); }
}
