import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CounterSliceComponent } from './counter-slice/counter-slice.component';
import { QrCodeHdComponent } from './qr-code/qr-code.component';
import { OutletEntryDialogComponent } from './outlet-entry-dialog/outlet-entry-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  { path: 'counter', component: CounterComponent },
  { path: 'counter-slice', component: CounterSliceComponent },
  { path: 'qr-code', component: QrCodeHdComponent },
  { path: 'outlet-dialog', component: OutletEntryDialogComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
