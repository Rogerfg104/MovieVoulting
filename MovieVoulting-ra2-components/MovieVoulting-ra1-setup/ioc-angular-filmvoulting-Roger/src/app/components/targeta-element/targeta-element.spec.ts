import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaElement } from './targeta-element';

describe('TargetaElement', () => {
  let component: TargetaElement;
  let fixture: ComponentFixture<TargetaElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TargetaElement],
    }).compileComponents();

    fixture = TestBed.createComponent(TargetaElement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
