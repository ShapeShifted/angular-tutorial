import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.scss'
})
export class Effect {
  count = signal(0);
  displayHeading = false;
  timeHeading = false;

  constructor(){
    effect(()=>{ //callback function
      if (this.count()%2 == 0){
        this.displayHeading = true;
      }
      else{
        this.displayHeading = false;
      }
      setTimeout(() => {
        this.timeHeading = true; //after 4 seconds this will become true
      }, 5000);
    })
  }
}
