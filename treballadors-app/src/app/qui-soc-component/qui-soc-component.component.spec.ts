import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiSocComponentComponent } from './qui-soc-component.component';

describe('QuiSocComponentComponent', () => {
  let component: QuiSocComponentComponent;
  let fixture: ComponentFixture<QuiSocComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuiSocComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuiSocComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
