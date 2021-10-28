import { CounterSate } from '../../counter/store/counter.model';
import { createSlice, PayloadAction, noopReducer } from 'ngrx-slice';

export const initialStateSlice: CounterSate = {
  value: 0,
  incrementCount: 0,
  decrementCount: 0,
}
export const {
  actions: CounterSliceActions,
  selectors: CounterSliceSelectors,
  ...counterSliceFeature
} = createSlice({
  name: 'Counter-Slice',
  initialState: initialStateSlice,
  reducers: {
    increment: (state) => {
      state.value++;
      state.incrementCount++;
    },
    decrement: (state) => {
      state.value--;
      state.incrementCount++;
    },
    multiply: {
      success: (state, { value }: PayloadAction<{ value: number }>) => {
        state.value = value;
      },
      trigger: noopReducer<{ mount: number }>()
    }
  }
})
