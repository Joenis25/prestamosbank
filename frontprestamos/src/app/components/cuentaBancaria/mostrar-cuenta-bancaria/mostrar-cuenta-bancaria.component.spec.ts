import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCuentaBancariaComponent } from './mostrar-cuenta-bancaria.component';

describe('MostrarCuentaBancariaComponent', () => {
  let component: MostrarCuentaBancariaComponent;
  let fixture: ComponentFixture<MostrarCuentaBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarCuentaBancariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarCuentaBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
