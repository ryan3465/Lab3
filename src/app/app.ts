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
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
  //declare variables 
  name:string = "Martin";
  age:number = 21;
}
