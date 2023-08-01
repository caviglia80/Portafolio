import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeQaComponent } from './knowledge-qa.component';

describe('KnowledgeQaComponent', () => {
  let component: KnowledgeQaComponent;
  let fixture: ComponentFixture<KnowledgeQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeQaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KnowledgeQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
