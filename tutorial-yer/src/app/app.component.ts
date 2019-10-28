import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Rekenmasjientje';
  leeftijd:number = 100;
  placeholder:string = "Number to add"
  input:number;
  uitkomst:number = 0;

  optellen($event){
    var temp:number = this.uitkomst;
    this.input = Number($event.target.value);
    this.uitkomst += this.input;
    alert(this.input + " + " + temp + " = " + this.uitkomst);    
  }
}
