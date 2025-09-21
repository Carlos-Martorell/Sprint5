import { Component, Input } from '@angular/core';
import { iStep } from '../../models/istep';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [ NgStyle],
  templateUrl: './escena.html',
  styleUrl: './escena.css'
})


export class EscenaComponent {
  // 🎯 Recibe un solo objeto de paso del Padre
  // Usamos el nombre 'stepData' (singular)
  @Input({ required: true }) public stepData!: iStep;
}
