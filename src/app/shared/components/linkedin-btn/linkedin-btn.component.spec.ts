import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinBtnComponent } from './linkedin-btn.component';

describe('LinkedinBtnComponent', () => {
  let component: LinkedinBtnComponent;
  let fixture: ComponentFixture<LinkedinBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkedinBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkedinBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
