import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../../../services/persona.service';
import { PersonaI } from '../../../models/persona';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-persona',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardModule, ButtonModule],
  templateUrl: './actualizar-persona.component.html',
  styleUrl: './actualizar-persona.component.css'
})
export class ActualizarPersonaComponent implements OnInit{

  public id: number = 0;
  public form!: FormGroup; // Se inicializa en ngOnInit

  personaService = inject(PersonaService);
  
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
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });

    // Obtención del id del persona y los datos del p
    this.id = this.route.snapshot.params['id'];
    this.getPersona(this.id);
  }

  getPersona(id: number) {
    this.personaService.getOnePersona(id)
      .subscribe({
        next: (data) => {
          console.log(data);
          
          this.form.patchValue(data); // Carga los datos de persona en el formulario
        },
        error: (err) => {
          console.error('Error obteniendo persona:', err);
        }
      });

      
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    const formValue: PersonaI = this.form.value;
    this.personaService.updatePersona(this.id, formValue).subscribe(
      () => {
        this.router.navigateByUrl('personas');
      },
      err => {
        console.log(err);
        console.log('No se ha actualizado correctamente');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('/personas ');
  }

  // Getters del formulario
  get nombre() { return this.form.get('nombre'); }
  get apellido() { return this.form.get('apellido'); }
  get direccion() { return this.form.get('direccion'); }
  get correo() { return this.form.get('correo'); }
  get telefono() { return this.form.get('telefono'); }
}
