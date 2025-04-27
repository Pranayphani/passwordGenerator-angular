import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from "./child1/child1.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child1Component, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Password Generator';
  rangeValue: number=0;
  numbersValue: boolean=false;
  charactersValue: boolean=false;

}
