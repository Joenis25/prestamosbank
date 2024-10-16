import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaBancariaService } from '../../../services/cuenta-bancaria.service';
import { Router } from '@angular/router';
import { CuentaBancariaI } from '../../../models/cuentaBancaria';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-crear-cuenta-bancaria',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-cuenta-bancaria.component.html',
  styleUrl: './crear-cuenta-bancaria.component.css'
})
export class CrearCuentaBancariaComponent implements OnInit{

  public form: FormGroup; // Declaración de la propiedad form
  cuentaBancariaService = inject(CuentaBancariaService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // Inicialización del formulario en el constructor
    this.form = this.formBuilder.group({
      clienteId: ['', [Validators.required]],
      numeroCuenta: ['', [Validators.required]],
      tipoCuenta: ['', [Validators.required]],
      saldo: ['', [Validators.required]],

    });
  }
  ngOnInit(): void { }
  onSubmit(): void {
    const formValue: CuentaBancariaI = this.form.value;
    console.log(formValue);
    this.cuentaBancariaService.createCuentaBancaria(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('cuentas');
      },
      (      err: any) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/cuentas');
  }
  // Asegúrate de que los nombres de los controles de formulario sean correctos
  get clienteId() { return this.form.get('clienteId'); }
  get numeroCuenta() { return this.form.get('numeroCuenta'); }
  get tipoCuenta() { return this.form.get('tipoCuenta'); }
  get saldo() { return this.form.get('saldo'); }
}
