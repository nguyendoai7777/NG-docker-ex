import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffect } from './store/counter.effect';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CounterComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([ CounterEffect ]),
    FormsModule
  ],
  exports: [CounterComponent],
})
export class CounterModule { }
