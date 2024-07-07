import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectesComponentComponent } from './projectes-component.component';

describe('ProjectesComponentComponent', () => {
  let component: ProjectesComponentComponent;
  let fixture: ComponentFixture<ProjectesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
