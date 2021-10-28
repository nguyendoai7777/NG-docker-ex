import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { multiply, multiplySuccess } from './counter.actions';
import { selectValue } from './counter.selector';
import { map, switchMap } from 'rxjs/operators';
import { of, timer } from 'rxjs';

@Injectable()
export class CounterEffect {
  constructor(
    private readonly actions: Actions,
    private readonly store: Store,
  ) {
  }
  multiply$ = createEffect(() => this.actions.pipe(
    ofType(multiply),
    concatLatestFrom(() => this.store.select(selectValue)),
    switchMap(([ { mount }, currentValue ]) =>
      timer(0).pipe(
        map(() => multiplySuccess({ value: mount * currentValue }))
      )
    )
  ))
}
