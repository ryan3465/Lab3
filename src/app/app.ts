import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import component A and component B
import { A } from './a/a';
import { B } from './b/b';

@Component({
  //root of the main component 
  selector: 'app-root',
  //add the imports to the component
  imports: [RouterOutlet, A, B],
  //main component visual
  templateUrl: './app.html',
  //url-link
  styleUrl: './app.css'
})
  //Buisness logic goes here -
export class App {
  protected readonly title = signal('my-first-app');
  //declare variables 
  name:string = "Martin";
  age:number = 21;
}
