import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualitzaComponentComponent } from './actualitza-component.component';

describe('ActualitzaComponentComponent', () => {
  let component: ActualitzaComponentComponent;
  let fixture: ComponentFixture<ActualitzaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualitzaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualitzaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
