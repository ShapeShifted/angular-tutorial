import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.scss'
})
export class Ifelse {
  display:boolean=true;
  val = 10;

  hide(){
    this.display = !this.display;
    
  }
}
