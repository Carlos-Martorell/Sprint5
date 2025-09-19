import { Component, Input } from '@angular/core';
import { iStep } from '../../models/istep';
@Component({
  selector: 'app-escena',
  standalone: true,
  templateUrl: './escena.html',
  styleUrl: './escena.css'
})
export class EscenaComponent {
  // Usar @Input para recibir el array completo
  @Input() public stepsData: iStep[] = [];
}
