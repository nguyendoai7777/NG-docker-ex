import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CardModule } from './card/card.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterModule } from './counter/counter.module';
import { EffectsModule } from '@ngrx/effects';
import { CounterSliceModule } from './counter-slice/counter-slice.module';
import { QrCodeHdModule } from './qr-code/qr-code-hd.module';
import { OutletDialogModule } from './outlet-dialog/outlet-dialog.module';
import { OutletEntryDialogModule } from './outlet-entry-dialog/outlet-entry-dialog.module';
import { DialogShareService } from './core/services/dialog-share.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxMaskModule.forRoot(),
    CardModule,
    QrCodeHdModule,
    OutletDialogModule,
    OutletEntryDialogModule,
    CounterModule,
    CounterSliceModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
  ],
  providers: [DialogShareService],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
