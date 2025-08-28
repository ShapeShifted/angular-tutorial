import { Component } from '@angular/core';

@Component({
  selector: 'app-getset',
  imports: [],
  templateUrl: './getset.html',
  styleUrl: './getset.scss'
})
export class Getset {
username:string ="";

  getUsername(event: Event)
  {
    const name = (event.target as HTMLInputElement).value;
    this.username = name;
  }

  setUsername()
  {
    this.username = "Default";
  }

  getUsernameWithTemplate(val:string)
  {
    this.username = val;
    console.log(val);
  }
}
