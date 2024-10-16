import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCuentaBancariaComponent } from './eliminar-cuenta-bancaria.component';

describe('EliminarCuentaBancariaComponent', () => {
  let component: EliminarCuentaBancariaComponent;
  let fixture: ComponentFixture<EliminarCuentaBancariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarCuentaBancariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCuentaBancariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
