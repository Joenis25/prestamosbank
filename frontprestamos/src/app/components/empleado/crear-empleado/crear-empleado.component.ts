import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoService } from '../../../services/empleado.service';
import { Router } from '@angular/router';
import { EmpleadoI } from '../../../models/empleado';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-empleado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-empleado.component.html',
  styleUrl: './crear-empleado.component.css'
})
export class CrearEmpleadoComponent implements OnInit{

  public form: FormGroup; // Declaración de la propiedad form
  empleadoService = inject(EmpleadoService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // Inicialización del formulario en el constructor
    this.form = this.formBuilder.group({
      personaId: ['', [Validators.required]],
      sucursalId: ['', [Validators.required]],
    });
  }
  ngOnInit(): void { }
  onSubmit(): void {
    const formValue: EmpleadoI = this.form.value;
    console.log(formValue);
    this.empleadoService.createEmpleado(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('empleados');
      },
      (      err: any) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/empleados');
  }
  // Asegúrate de que los nombres de los controles de formulario sean correctos
  get personaId() { return this.form.get('personaId'); }
  get sucursalId() { return this.form.get('sucursalId'); }
}
