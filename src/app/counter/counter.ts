import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.scss'
})
export class Counter {
  count:number = 0;

  handleIncrement() {
    this.count++;
  }

  handleDecrement() {
    {
      if (this.count > 0) {
        this.count--;
      }
    }
  }

  handleReset() {
    this.count = 0;
  }

}
