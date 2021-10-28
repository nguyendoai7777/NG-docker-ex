import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterSliceActions, CounterSliceSelectors, randomMultiply, select10xValue } from './store/counter-slice.slice';

@Component({
  selector: 'app-counter-slice',
  template: `
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mt-5">
        <button class="btn btn-primary" (click)="onClickAction('inc')">+</button>
        <div class="px-4 ">Count: {{value$ | async}}</div>
        <div class="px-4 ">x10 Count: {{x10value$ | async}}</div>
        <button class="btn btn-danger" (click)="onClickAction('dec')">-</button>
      </div>
      <div class="d-flex align-items-center mt-2">
        <span style="white-space: nowrap">Multiply by: </span>
        <input type="number" [(ngModel)]="multiplyValue" class="form-control mx-3">
        <button class="btn btn-success" (click)="onClickAction('mul')">Multiply</button>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <button class="btn btn-success" (click)="mu()">Multiply</button>
      </div>
      <div class="pt-4">
        <div class="alert alert-primary">Increment button press {{incrementCount$ | async}} times</div>
        <div class="alert alert-warning">Decrement button press {{decrementCount$ | async}} times</div>
      </div>
    </div>
  `,
  styles: []
})
export class CounterSliceComponent implements OnInit {
  multiplyValue = 1;
  value$ = this.store.select(CounterSliceSelectors.selectValue);
  x10value$ = this.store.select(select10xValue);
  incrementCount$ = this.store.select(CounterSliceSelectors.selectIncrementCount)
  decrementCount$ = this.store.select(CounterSliceSelectors.selectDecrementCount)
  constructor(
    private readonly store: Store,
  ) {
  }
  ngOnInit(): void {
  }
  onClickAction(type: 'inc' | 'dec' | 'mul') {
    type === 'inc' && this.store.dispatch(CounterSliceActions.increment())
    type === 'dec' && this.store.dispatch(CounterSliceActions.decrement())
    type === 'mul' && this.store.dispatch(CounterSliceActions.multiply.trigger({ mount: this.multiplyValue }))
  }
  mu() {
    this.store.dispatch(randomMultiply())
  }
}
