import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogShareService } from '../core/services/dialog-share.service';

@Component({
  selector: 'app-outlet-dialog',
  template: `
    <div class="container">
      <h1 mat-dialog-title>Hi {{name}}</h1>
      <div mat-dialog-content>
        <p>What's your favorite animal?</p>
        <mat-form-field>
          <input matInput [(ngModel)]="animal">
        </mat-form-field>
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">No Thanks</button>
        <button mat-button (click)="onOkClick()" cdkFocusInitial>Ok</button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class OutletDialogComponent implements OnInit {
  animal!: string;
  name!: string;
  constructor(
    private dataService: DialogShareService,
    public dialogRef: MatDialogRef<OutletDialogComponent>,
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dataService.animal = undefined;
    this.dialogRef.close();
  }

  onOkClick(): void {
    this.dataService.animal = this.animal;
    this.dialogRef.close();
  }
}
