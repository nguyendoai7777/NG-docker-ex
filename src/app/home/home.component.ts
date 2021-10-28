import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { fromEvent, zip } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
  card = true;
  maskInput = new FormControl('')
  mss = ''
  constructor() {
  }
  ngOnInit(): void {
    this.maskInput.valueChanges.pipe(
      map(value => {
        const x = Array.from(value);
        for (let i = 0; i < x.length; i++) {
          if ([3,7,11,15,19].includes(i)) {
            x.splice(i, 0, '-')
          }
        }
        return { num: x.join('') };
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
