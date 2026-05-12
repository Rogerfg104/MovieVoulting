import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariCerca } from './formulari-cerca';

describe('FormulariCerca', () => {
  let component: FormulariCerca;
  let fixture: ComponentFixture<FormulariCerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariCerca],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulariCerca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
