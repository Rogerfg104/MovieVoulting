import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaElements } from './llista-elements';

describe('LlistaElements', () => {
  let component: LlistaElements;
  let fixture: ComponentFixture<LlistaElements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaElements],
    }).compileComponents();

    fixture = TestBed.createComponent(LlistaElements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
