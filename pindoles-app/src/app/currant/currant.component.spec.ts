import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrantComponent } from './currant.component';

describe('CurrantComponent', () => {
  let component: CurrantComponent;
  let fixture: ComponentFixture<CurrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
