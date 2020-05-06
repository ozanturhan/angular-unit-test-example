import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <span>Count: {{ count }}</span>

    <button id="increment" (click)="increment()">Increment</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  count = 0;

  constructor() {}

  ngOnInit(): void {}

  increment() {
    this.count++;
  }
}
