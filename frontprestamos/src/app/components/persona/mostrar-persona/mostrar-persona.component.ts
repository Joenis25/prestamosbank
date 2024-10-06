import { Component, OnInit } from '@angular/core';
import { PersonaI } from '../../../models/persona';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PersonaService } from '../../../services/persona.service'

@Component({
  selector: 'app-mostrar-persona',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, RouterModule],
  templateUrl: './mostrar-persona.component.html',
  styleUrl: './mostrar-persona.component.css'
})
export class MostrarPersonaComponent implements OnInit{
  public personas:PersonaI[] = []
  constructor(
    private personaService: PersonaService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.mostrarPersonas()
  }
  mostrarPersonas() {
    this.personaService.getAllPersona().subscribe({
        next: (data) => {
          this.personas = data.persona
           console.log(data)
        }
      })
  }
  eliminar(id: number): void{
    this.router.navigateByUrl('/personas');
    this.personaService.deletePersona(id).subscribe(
      () => {
        // this.messageService.add({severity:'warn', summary: 'Notificación', detail: 'Personas Eliminado', life:5000});
        this.mostrarPersonas();
      },
      err => {
        console.log('error')
        this.router.navigateByUrl('/personas');
      }
    );
  }

}
