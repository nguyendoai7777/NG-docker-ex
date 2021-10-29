import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { OutletDialogComponent } from '../outlet-dialog/outlet-dialog.component';

@Component({
  template: ``,
})
export class OutletEntryDialogComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.openDialog();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(OutletDialogComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate([ '../' ], { relativeTo: this.route });
    });
  }
}
