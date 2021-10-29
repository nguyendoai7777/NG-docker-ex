import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  template: `
    <p>
      <qrcode [qrdata]="data" [width]="256" [errorCorrectionLevel]="'M'"></qrcode>
    </p>
  `,
  styles: [
  ]
})
export class QrCodeHdComponent implements OnInit {
  data = `
  số điện: 170 số điện
  tiền điện: 185.000.000 VND
  `;
  rawData = [
    {label: 'Tiền điện', value: '180.000 vnđ'},
    {label: 'số điện', value: '50 số'}
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
