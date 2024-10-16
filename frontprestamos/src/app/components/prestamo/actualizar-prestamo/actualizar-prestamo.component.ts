import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestamoService } from '../../../services/prestamo.service';
import { PrestamoI } from '../../../models/prestamo';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-prestamo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-prestamo.component.html',
  styleUrl: './actualizar-prestamo.component.css'
})
export class ActualizarPrestamoComponent implements OnInit{

  public id: number = 0;
  public form!: FormGroup; // Se inicializa en ngOnInit

  prestamoService = inject(PrestamoService);
  
  constructor(
    private formBuilder: FormBuilder, // Se inyecta en el constructor
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Inicialización del formulario
    this.form = this.formBuilder.group({
      id: [''],
      clienteId: ['', [Validators.required]],
      empleadoId: ['', [Validators.required]],
      fechaPrestamo: ['', [Validators.required]],
      tipoPrestamo: ['', [Validators.required]],
      monto: ['', [Validators.required]],
      interes: ['', [Validators.required]],
      estado: ['', [Validators.required]],

    });

    // Obtención del id del sucursal y los datos del sucursal
    this.id = this.route.snapshot.params['id'];
    this.getPrestamo(this.id);
  }

  getPrestamo(id: number) {
    this.prestamoService.getOnePrestamo(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          
          this.form.patchValue(data); // Carga los datos de sucursal en el formulario
        },
        error: (err) => {
          console.error('Error obteniendo cliente:', err);
        }
      });

      
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    const formValue: PrestamoI = this.form.value;
    this.prestamoService.updatePrestamo(this.id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('prestamos');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/prestamos ');
  }

  // Getters del formulario
  get clienteId() { return this.form.get('clienteId'); }
  get empleadoId() { return this.form.get('empleadoId'); }
  get fechaPrestamo() { return this.form.get('fechaPrestamo'); }
  get tipoPrestamo() { return this.form.get('tipoPrestamo'); }
  get monto() { return this.form.get('monto'); }
  get interes() { return this.form.get('interes'); }
  get estadp() { return this.form.get('estado'); }
}
