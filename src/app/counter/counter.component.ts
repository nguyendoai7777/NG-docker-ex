import { Component, OnInit } from '@angular/core';
import { on, Store } from '@ngrx/store';
import { selectDecrementCount, selectIncrementCount, selectValue } from './store/counter.selector';
import { decrement, increment, multiply } from './store/counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    <div class="container">
      <div class="d-flex justify-content-center align-items-center mt-5">
        <button class="btn btn-primary" (click)="onClickAction('inc')">+</button>
        <div class="px-4 ">Count: {{value$ | async}}</div>
        <button class="btn btn-danger" (click)="onClickAction('dec')">-</button>
      </div>
      <div class="d-flex align-items-center">
        <span style="white-space: nowrap">Multiply by: </span>
        <input type="number" [(ngModel)]="multiplyValue" class="form-control mx-3">
        <button class="btn btn-success" (click)="mul()">Multiply</button>
      </div>
      <div class="pt-4">
        <div class="alert alert-primary">Increment button press {{incrementCount$ | async}} times</div>
        <div class="alert alert-warning">Decrement button press {{decrementCount$ | async}} times</div>
      </div>
    </div>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
  readonly value$ = this.store.select(selectValue)
  readonly incrementCount$ = this.store.select(selectIncrementCount)
  readonly decrementCount$ = this.store.select(selectDecrementCount)
  multiplyValue = 1;
  constructor(
    private readonly store: Store,
  ) {
  }
  ngOnInit(): void {
  }
  onClickAction(type: 'inc' | 'dec' | 'mul') {
    type === 'inc' && this.store.dispatch(increment())
    type === 'dec' && this.store.dispatch(decrement())
  }
  mul() {
    this.store.dispatch(multiply({ mount: this.multiplyValue }))
  }
}
