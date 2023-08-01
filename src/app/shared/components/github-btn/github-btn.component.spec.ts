import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubBtnComponent } from './github-btn.component';

describe('GithubBtnComponent', () => {
  let component: GithubBtnComponent;
  let fixture: ComponentFixture<GithubBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
