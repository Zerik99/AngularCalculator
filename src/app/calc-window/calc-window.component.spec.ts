import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcWindowComponent } from './calc-window.component';

describe('CalcWindowComponent', () => {
  let component: CalcWindowComponent;
  let fixture: ComponentFixture<CalcWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcWindowComponent]
    });
    fixture = TestBed.createComponent(CalcWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
