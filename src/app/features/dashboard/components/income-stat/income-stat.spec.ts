import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeStat } from './income-stat';

describe('IncomeStat', () => {
  let component: IncomeStat;
  let fixture: ComponentFixture<IncomeStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeStat],
    }).compileComponents();

    fixture = TestBed.createComponent(IncomeStat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
