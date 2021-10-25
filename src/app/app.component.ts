import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  deferredPrompt!: any;
  card = true;
  @HostListener('window:beforeinstallprompt', [ '$event' ])
  onbeforeinstallprompt(e: Event): void {
    e.preventDefault();
    this.deferredPrompt = e;
  }
  title = 'ng-docker';
  ngOnInit(): void {
    setTimeout(() =>{
      this.card = false;
    }, 2000)
  }
}
