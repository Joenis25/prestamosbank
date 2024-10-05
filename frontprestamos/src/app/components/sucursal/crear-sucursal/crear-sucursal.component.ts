import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SucursalService } from '../../../services/sucursal.service';
import { Router } from '@angular/router';
import { SucursalI } from '../../../models/sucursal';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-crear-sucursal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-sucursal.component.html',
  styleUrl: './crear-sucursal.component.css'
})
export class CrearSucursalComponent implements OnInit{
  public form: FormGroup; // Declaración de la propiedad form
  sucursalService = inject(SucursalService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // Inicialización del formulario en el constructor
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
  }
  ngOnInit(): void { }
  onSubmit(): void {
    const formValue: SucursalI = this.form.value;
    console.log(formValue);
    this.sucursalService.createSucursal(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('sucursales');
      },
      (      err: any) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/sucursales');
  }
  // Asegúrate de que los nombres de los controles de formulario sean correctos
  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
}
