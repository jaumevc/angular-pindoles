import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreballadorFillComponent } from './treballador-fill.component';

describe('TreballadorFillComponent', () => {
  let component: TreballadorFillComponent;
  let fixture: ComponentFixture<TreballadorFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreballadorFillComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TreballadorFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
