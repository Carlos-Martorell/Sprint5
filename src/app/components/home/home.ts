import { Component, OnInit, signal } from '@angular/core';
import { StepsService } from '../../services/steps';
import { EscenaComponent } from '../escena/escena';
import { iStep } from '../../models/istep';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  // ✅ Crear una Signal para almacenar el array de pasos
  public steps = signal<iStep[]>([]);

  // Inyectar el servicio en el constructor
  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    // 1. Obtener el array del servicio y asignarlo a la Signal
    this.steps.set(this.stepsService.getSteps());
  }

}
