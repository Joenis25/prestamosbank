import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaService } from '../../../services/persona.service';
import { Router } from '@angular/router';
import { PersonaI } from '../../../models/persona';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-crear-persona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastModule, CardModule, ButtonModule],
  templateUrl: './crear-persona.component.html',
  styleUrl: './crear-persona.component.css'
})
export class CrearPersonaComponent implements OnInit{

  public form: FormGroup; // Declaración de la propiedad form
  personaService = inject(PersonaService);
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    // Inicialización del formulario en el constructor
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
  }
  ngOnInit(): void { }
  onSubmit(): void {
    const formValue: PersonaI = this.form.value;
    console.log(formValue);
    this.personaService.createPersona(formValue).subscribe(
      () => {
        console.log(formValue);
        this.router.navigateByUrl('personas');
      },
      (      err: any) => {
        console.log(err);
        console.log('No se ha creado correctamente');
      }
    );
  }
  cancel() {
    this.router.navigateByUrl('/personas');
  }
  // Asegúrate de que los nombres de los controles de formulario sean correctos
  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get direccion() { return this.form.get('direccion'); }
  get correo() { return this.form.get('correo'); }
  get telefono() { return this.form.get('telefono'); }

}
