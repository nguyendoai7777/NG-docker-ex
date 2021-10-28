import { CounterSate } from '../../counter/store/counter.model';
import { createSlice, PayloadAction, noopReducer } from 'ngrx-slice';
import { immerOn } from 'ngrx-immer/store';
import { createAction, createSelector } from '@ngrx/store';

export const initialStateSlice: CounterSate = {
  value: 0,
  incrementCount: 0,
  decrementCount: 0,
}
export const randomMultiply = createAction('[Counter ExtraReducer] - randomMultiply')
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
  },
  sliceActionNameGetter: (featureName, actionName) => {
    return `@@[${featureName} - ${actionName}]`
  }, // to rename from default name;
  extraReducers: [
    immerOn<CounterSate, [ typeof randomMultiply ]>(randomMultiply, (state) => {
      state.value += Math.floor(Math.random() * 1000);
    })
  ]
})


export const select10xValue = createSelector(CounterSliceSelectors.selectValue, state => state * 10)
