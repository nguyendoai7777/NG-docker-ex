import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
  @Input() card!: boolean;
  constructor() {
  }
  ngOnInit(): void {
    interval(1000).pipe(
      take(20),

    )
  }
}
