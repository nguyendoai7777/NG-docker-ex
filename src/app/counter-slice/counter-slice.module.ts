import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterSliceComponent } from './counter-slice.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterSliceEffect } from './store/counter-slice.effect';
import { counterSliceFeature } from './store/counter-slice.slice';



@NgModule({
  declarations: [
    CounterSliceComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('Counter-Slice', counterSliceFeature.reducer),
    EffectsModule.forFeature([CounterSliceEffect]),
    FormsModule
  ],
  exports: [
    CounterSliceComponent
  ]
})
export class CounterSliceModule { }
