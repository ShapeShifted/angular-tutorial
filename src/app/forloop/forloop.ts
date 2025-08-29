import { Component } from '@angular/core';

@Component({
  selector: 'app-forloop',
  imports: [],
  templateUrl: './forloop.html',
  styleUrl: './forloop.scss'
})
export class Forloop {
  users=['Alice', 'Bob', 'Charlie'];

  info=[
    {name:"Alice",age:15,location:"New York"},
    {name:"Bob",age:20,location:"Los Angeles"},
    {name:"Charlie",age:25,location:"Chicago"},
    {name:"Dudley",age:25,location:"Chicago"},
    {name:"Easton",age:25,location:"Chicago"}
  ]
  //info = [];

  getName(name:string)
  {
    console.log(name);
  }
}
