import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutletEntryDialogComponent } from './outlet-entry-dialog.component';

describe('OutletEntryDialogComponent', () => {
  let component: OutletEntryDialogComponent;
  let fixture: ComponentFixture<OutletEntryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutletEntryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutletEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
