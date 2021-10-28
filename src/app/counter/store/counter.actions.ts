import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter] increment');
export const decrement = createAction('[Decrement] decrement');

export const multiply = createAction('[Multiply] multiply', props<{mount: number}>());
export const multiplySuccess = createAction('[Multiply] multiply success', props<{value: number}>());
