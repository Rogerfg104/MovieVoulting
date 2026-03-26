import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraCerca } from './barra-cerca';

describe('BarraCerca', () => {
  let component: BarraCerca;
  let fixture: ComponentFixture<BarraCerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraCerca],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraCerca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
