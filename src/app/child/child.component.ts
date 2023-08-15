import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [DatePipe]
})
export class ChildComponent implements OnInit {
  isLoading= false;
  text = 'Loading.......'
  myDate = new Date();
  constructor(){}
  ngOnInit(): void {
    
  }
  onClick(result: boolean): any{
    this.isLoading = result;
    if(this.isLoading==true){
      return this.text;
    } else {
      return this.myDate;
    }
    
  }
}
