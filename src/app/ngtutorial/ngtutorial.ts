import { NgIf , NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngtutorial',
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './ngtutorial.html',
  styleUrl: './ngtutorial.scss'
})
export class Ngtutorial {
  login= false;
  show = false;
  students = ['John', 'Jane', 'Jim'];
  color = 'nope';

  student_data = [{
    name: 'John',
    age: 25,
    job: 'Developer',
  }, {
    name: 'Jane',
    age: 22,
    job: 'Designer',
  }, {
    name: 'Jim',
    age: 30,
    job: 'Developer',
  }]

  toggle(){
    this.show = !this.show;
  }

  changeAccountStatus() {
    this.login = !this.login;
  }

  changeColor(color:string)
  {
    this.color = color;
  }
}
