import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SucursalService } from '../../../services/sucursal.service';
import { SucursalI } from '../../../models/sucursal';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-sucursal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-sucursal.component.html',
  styleUrl: './actualizar-sucursal.component.css'
})
export class ActualizarSucursalComponent implements OnInit {
  public id: number = 0;
  public form!: FormGroup; // Se inicializa en ngOnInit

  sucursalService = inject(SucursalService);
  
  constructor(
    private formBuilder: FormBuilder, // Se inyecta en el constructor
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // Inicialización del formulario
    this.form = this.formBuilder.group({
      id: [''],
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });

    // Obtención del id del sucursal y los datos del sucursal
    this.id = this.route.snapshot.params['id'];
    this.getSucursal(this.id);
  }

  getSucursal(id: number) {
    this.sucursalService.getOneSucursal(id)
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

    const formValue: SucursalI = this.form.value;
    this.sucursalService.updateSucursal(this.id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('sucursales');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/sucursales ');
  }

  // Getters del formulario
  get nombre() { return this.form.get('nombre'); }
  get direccion() { return this.form.get('direccion'); }
  get telefono() { return this.form.get('telefono'); }
}
