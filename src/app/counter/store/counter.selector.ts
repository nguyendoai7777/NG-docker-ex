import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterSate } from './counter.model';

export const selectCounter = createFeatureSelector<CounterSate>('counter');
export const selectValue = createSelector(
  selectCounter,
  (counterState) => counterState.value
);

export const selectIncrementCount = createSelector(
  selectCounter,
  (counterState) => counterState.incrementCount
);

export const selectDecrementCount = createSelector(
  selectCounter,
  (counterState) => counterState.decrementCount
);
