import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  imports: [],
  templateUrl: './switch.html',
  styleUrl: './switch.scss'
})
export class Switch {
  color = 'blue';
  handleColour(val:string)
  {
    this.color = val;
  }

  chooseColor(event:Event)
  {
    this.color = (event.target as HTMLInputElement).value;
  }
}
