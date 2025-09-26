import { Component, signal } from '@angular/core';
import { HomeComponent } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('onBoarding');
}
