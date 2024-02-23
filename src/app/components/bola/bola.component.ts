import { Component, Input } from '@angular/core';
import { Advice } from '../../interfaces/advice';
import { GetAdviceService } from '../../services/get-advice.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bola',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './bola.component.html',
  styleUrl: './bola.component.css',
})
export class BolaComponent {
  respuesta: string | null = null;
  isShaking: boolean = false;
  constructor(private getAdviceService: GetAdviceService) {}

  fetchAdvice(): void {
    this.isShaking = true; // Activate shake animation
    this.getAdviceService.getAdvice().subscribe(
      (data: Advice) => {
        this.respuesta = data.slip.advice;
        setTimeout(() => {
          this.isShaking = false; // Disable shake animation after a brief interval
        }, 1000); // Shake animation duration (1 second)
      },
      (error) => {
        console.error('Error obteniendo el consejo:', error);
        this.isShaking = false; // In case of error, disable shake animation
      }
    );
  }
}
