import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CuentaBancariaService } from '../../../services/cuenta-bancaria.service';
import { CuentaBancariaI } from '../../../models/cuentaBancaria';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-cuenta-bancaria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-cuenta-bancaria.component.html',
  styleUrl: './actualizar-cuenta-bancaria.component.css'
})
export class ActualizarCuentaBancariaComponent implements OnInit{

public id: number = 0;
  public form!: FormGroup; // Se inicializa en ngOnInit

  cuentaBancariaService = inject(CuentaBancariaService);
  
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
      numeroCuenta: ['', [Validators.required]],
      tipoCuenta: ['', [Validators.required]],
      saldo: ['', [Validators.required]],
    });

    // Obtención del id del sucursal y los datos del sucursal
    this.id = this.route.snapshot.params['id'];
    this.getCuentaBancaria(this.id);
  }

  getCuentaBancaria(id: number) {
    this.cuentaBancariaService.getOneCuentaBancaria(id)
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

    const formValue: CuentaBancariaI = this.form.value;
    this.cuentaBancariaService.updateCuentaBancaria(this.id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('cuentas');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/cuentas ');
  }

  // Getters del formulario
  get clienteId() { return this.form.get('clienteId'); }
  get numeroCuenta() { return this.form.get('numeroCuenta'); }
  get tipoCuenta() { return this.form.get('tipoCuenta'); }
  get saldo() { return this.form.get('saldo'); }
}
