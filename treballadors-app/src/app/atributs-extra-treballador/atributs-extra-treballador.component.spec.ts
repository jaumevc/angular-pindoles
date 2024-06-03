import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributsExtraTreballadorComponent } from './atributs-extra-treballador.component';

describe('AtributsExtraTreballadorComponent', () => {
  let component: AtributsExtraTreballadorComponent;
  let fixture: ComponentFixture<AtributsExtraTreballadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtributsExtraTreballadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtributsExtraTreballadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
