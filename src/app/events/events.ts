import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events {
  HandleEvent(event:Event)
  {
    console.log("Function called",event.type);
    console.log("Function called",(event.target as HTMLInputElement).className);
  }
}
