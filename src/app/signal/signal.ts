import { Component, Signal, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.scss'
})
export class Signal1 {
  data: number = 10;
  count = signal(0);
  data2 = signal<number | string>(1234);
  data3:WritableSignal<number | string> = signal('Hello');

  //the two aboves are writable signal (one is TS and one is JS)
  //the one below is computed / read-only signal
  data4: Signal<number | string> = computed(() => 5678);
  
  data5=signal(15);
  data6=signal(19);
  data7:Signal<number> = computed(() => this.data5() + this.data6());
  // this computed signal can be edited through one of its elements

  constructor(){
    effect(() => {
      console.log(this.count());
    });
  }

  updateAmount(val:string){
    if (val == 'inc'){
      this.count.set(this.count() + 1);
    }
    else{
      this.count.set(this.count() - 1);
    }
  }
}
