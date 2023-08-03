import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoresComponent } from './empleadores.component';

describe('EmpleadoresComponent', () => {
  let component: EmpleadoresComponent;
  let fixture: ComponentFixture<EmpleadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
