import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../../services/empleado.service';
import { EmpleadoI } from '../../../models/empleado';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-empleado',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-empleado.component.html',
  styleUrl: './actualizar-empleado.component.css'
})
export class ActualizarEmpleadoComponent implements OnInit{

  public id: number = 0;
  public form!: FormGroup; // Se inicializa en ngOnInit

  empleadoService = inject(EmpleadoService);
  
  constructor(
    private formBuilder: FormBuilder, // Se inyecta en el constructor
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Inicialización del formulario
    this.form = this.formBuilder.group({
      personaId: ['', [Validators.required]],
      sucursalId: ['', [Validators.required]],
    });

    // Obtención del id del empleado y los datos del empleado
    this.id = this.route.snapshot.params['id'];
    this.getEmpleado(this.id);
  }

  getEmpleado(id: number) {
    this.empleadoService.getOneEmpleado(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          
          this.form.patchValue(data); // Carga los datos de empleado en el formulario
        },
        error: (err) => {
          console.error('Error obteniendo empleado:', err);
        }
      });

      
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    const formValue: EmpleadoI = this.form.value;
    this.empleadoService.updateEmpleado(this.id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('empleados');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/empleados ');
  }

  // Getters del formulario
  get personaId() { return this.form.get('personaId'); }
  get sucursalId() { return this.form.get('sucursalId'); }
}
