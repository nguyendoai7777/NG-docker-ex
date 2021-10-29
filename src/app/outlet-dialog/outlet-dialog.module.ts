import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletDialogComponent } from './outlet-dialog.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    OutletDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [
    OutletDialogComponent
  ]
})
export class OutletDialogModule { }
