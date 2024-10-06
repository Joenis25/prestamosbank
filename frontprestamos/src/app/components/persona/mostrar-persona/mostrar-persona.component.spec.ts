import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPersonaComponent } from './mostrar-persona.component';

describe('MostrarPersonaComponent', () => {
  let component: MostrarPersonaComponent;
  let fixture: ComponentFixture<MostrarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarPersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
