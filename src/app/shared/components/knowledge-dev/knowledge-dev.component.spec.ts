import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeDevComponent } from './knowledge-dev.component';

describe('KnowledgeDevComponent', () => {
  let component: KnowledgeDevComponent;
  let fixture: ComponentFixture<KnowledgeDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
