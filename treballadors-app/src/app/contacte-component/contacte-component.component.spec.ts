import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacteComponentComponent } from './contacte-component.component';

describe('ContacteComponentComponent', () => {
  let component: ContacteComponentComponent;
  let fixture: ComponentFixture<ContacteComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContacteComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
