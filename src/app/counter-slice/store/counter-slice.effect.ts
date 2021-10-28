import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { of, timer } from 'rxjs';
import { CounterSliceActions, CounterSliceSelectors } from './counter-slice.slice';

@Injectable()
export class CounterSliceEffect {
  constructor(
    private readonly actions: Actions,
    private readonly store: Store,
  ) {
  }
  multiply$ = createEffect(() => this.actions.pipe(
    ofType(CounterSliceActions.multiply.trigger),
    concatLatestFrom(() => this.store.select(CounterSliceSelectors.selectValue)),
    switchMap(([ { mount }, currentValue ]) =>
      timer(0).pipe(
        map(() => CounterSliceActions.multiply.success({ value: mount * currentValue }))
      )
    )
  ))
}
