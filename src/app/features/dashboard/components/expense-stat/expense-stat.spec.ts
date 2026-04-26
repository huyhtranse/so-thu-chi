import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseStat } from './expense-stat';

describe('ExpenseStat', () => {
  let component: ExpenseStat;
  let fixture: ComponentFixture<ExpenseStat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseStat],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpenseStat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
