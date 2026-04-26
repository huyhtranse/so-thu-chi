import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingCalendar } from './spending-calendar';

describe('SpendingCalendar', () => {
  let component: SpendingCalendar;
  let fixture: ComponentFixture<SpendingCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpendingCalendar],
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingCalendar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
