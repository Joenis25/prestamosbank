import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarSucursalComponent } from './mostrar-sucursal.component';

describe('MostrarSucursalComponent', () => {
  let component: MostrarSucursalComponent;
  let fixture: ComponentFixture<MostrarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarSucursalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
