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
  maskInput = new FormControl('');
  mss = '';
  constructor() {
  }
  ngOnInit(): void {
    console.log(this.mss)
    let t = 3;
    this.maskInput.valueChanges.pipe(
      map(value => {
        const x = Array.from(value);
        for (let i = 0; i < x.length; i++) {
          if (i === t) {
            t += 4;
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
