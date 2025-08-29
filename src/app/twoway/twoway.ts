import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-twoway',
  imports: [FormsModule],
  templateUrl: './twoway.html',
  styleUrl: './twoway.scss'
})
export class Twoway {
  name = "";
  zoomToggle= false;

  //an alternative, more traditional way
  ChangeName(event:Event){
    const value = (event.target as HTMLInputElement).value;
    this.name = value;
  }

  toggleZoom() {
    this.zoomToggle = !this.zoomToggle;
  }
}
