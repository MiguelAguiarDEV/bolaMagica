import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BolaComponent } from './components/bola/bola.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BolaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bolaMagicaV2';
}
