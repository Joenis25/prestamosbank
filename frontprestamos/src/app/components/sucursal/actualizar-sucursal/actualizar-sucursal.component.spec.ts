import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSucursalComponent } from './actualizar-sucursal.component';

describe('ActualizarSucursalComponent', () => {
  let component: ActualizarSucursalComponent;
  let fixture: ComponentFixture<ActualizarSucursalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarSucursalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
