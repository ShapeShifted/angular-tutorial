import { Component, signal } from '@angular/core';
import { Login } from './login/login';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-home',
  imports: [ Login, ProfileComponent],
  templateUrl: 'homepage.html',
})

export class Home {
  protected readonly title = 'Tom Cruise';
  handleClickEvent() {
    alert('Button clicked!');
    this.otherFunction();
  }

  otherFunction()
  {
    console.log('other function');
  }
}
