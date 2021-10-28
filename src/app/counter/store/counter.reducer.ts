import { CounterSate } from './counter.model';
import { createReducer, on } from '@ngrx/store';
import { decrement, increment, multiplySuccess } from './counter.actions';

export const initialState: CounterSate = {
  value: 0,
  incrementCount: 0,
  decrementCount: 0,
}
export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, value: state.value + 1, incrementCount: state.incrementCount + 1 })),
  on(decrement, state => ({ ...state, value: state.value - 1, decrementCount: state.decrementCount + 1 })),
  on(multiplySuccess, (state, { value }) => ({ ...state, value }))
)
