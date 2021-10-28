import { Component, HostListener } from '@angular/core';
import { fromEvent, Observable, ObservedValueOf, zip } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  deferredPrompt!: any;

  @HostListener('window:beforeinstallprompt', [ '$event' ])
  onbeforeinstallprompt(e: Event): void {
    e.preventDefault();
    this.deferredPrompt = e;
  }
  title = 'ng-docker';
  ngOnInit(): void {

  }
}
