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
  card = true;
  maskInput = new FormControl('')
  @HostListener('window:beforeinstallprompt', [ '$event' ])
  onbeforeinstallprompt(e: Event): void {
    e.preventDefault();
    this.deferredPrompt = e;
  }
  mss = ''
  title = 'ng-docker';
  ngOnInit(): void {
    console.log(this.mss)
    let t = 3;
    this.maskInput.valueChanges.pipe(
      map(value => {
        const x = Array.from(value);
        for (let i = 0; i < x.length; i++) {
          if (i === t) {
            t+=4;
            x.splice(i, 0, '-')
          }
        }
        return { num: x.join(''), t };
      })
    ).subscribe((e) => {
      console.log(e)
    })
    setTimeout(() => {
      this.card = false;
    }, 2000)
    zip<[ MouseEvent, MouseEvent ]>(fromEvent(document, 'mousedown'), fromEvent(document, 'mouseup')).pipe(
    ).subscribe(
      (e) => {
        const x = [
          {
            clientX1: e[0].clientX,
            clientY1: e[0].clientY,
          },
          {
            clientX2: e[1].clientX,
            clientY2: e[1].clientY,
          }
        ];
        console.log(x)
      }
    )
  }
}
