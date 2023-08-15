import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fahrenheit= 0;
  onInput=( event: Event)=>{
    const value=parseFloat((<HTMLInputElement>event.target).value);
      this.fahrenheit=value
      

  }
  
}
