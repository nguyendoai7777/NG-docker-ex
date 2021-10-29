import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeHdComponent } from './qr-code.component';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    QrCodeHdComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule
  ],
  exports: [
    QrCodeHdComponent
  ]
})
export class QrCodeHdModule {
}
