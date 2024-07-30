import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkerComponent } from './addworker.component';

describe('AddWorkererComponent', () => {
  let component: AddWorkerComponent;
  let fixture: ComponentFixture<AddWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
