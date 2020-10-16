import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesTarjetaComponent } from './personajes-tarjeta.component';

describe('PersonajesTarjetaComponent', () => {
  let component: PersonajesTarjetaComponent;
  let fixture: ComponentFixture<PersonajesTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
