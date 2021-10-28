import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSliceComponent } from './counter-slice.component';

describe('CounterComponent', () => {
  let component: CounterSliceComponent;
  let fixture: ComponentFixture<CounterSliceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterSliceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterSliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
