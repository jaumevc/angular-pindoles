import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPersonalitzatComponent } from './error-personalitzat.component';

describe('ErrorPersonalitzatComponent', () => {
  let component: ErrorPersonalitzatComponent;
  let fixture: ComponentFixture<ErrorPersonalitzatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorPersonalitzatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorPersonalitzatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
