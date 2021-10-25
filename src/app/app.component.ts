import { Component, HostListener } from '@angular/core';

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


}
