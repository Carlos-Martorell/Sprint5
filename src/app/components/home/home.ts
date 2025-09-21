import { Component, OnInit, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { StepsService } from '../../services/steps';
import { EscenaComponent } from '../escena/escena';
import { iStep } from '../../models/istep';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent, NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {

  // La lista completa de todos los pasos
  public steps = signal<iStep[]>([]);

  // 🎯 SIGNAL para rastrear el índice de la frase activa (Empieza en 0)
  public currentStepIndex = signal<number>(0);

  // 🎯 SIGNAL COMPUTADA: Devuelve el objeto iStep que corresponde al índice actual
  public currentStep = computed(() =>
    this.steps()[this.currentStepIndex()]
  );

  // 🎯 SIGNAL COMPUTADA: Controla si el botón "Retroceder" debe estar deshabilitado
  public canGoBack = computed(() => this.currentStepIndex() > 0);

  // 🎯 SIGNAL COMPUTADA: Controla si el botón "Avanzar" debe estar deshabilitado
  public canGoForward = computed(() => this.currentStepIndex() < this.steps().length - 1);

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    // Carga los datos al iniciar el componente
    this.steps.set(this.stepsService.getSteps());
  }

  // 🎯 Método para avanzar (incrementa el índice)
  goForward(): void {
    if (this.canGoForward()) {
      // Usamos update() para modificar el valor basado en el valor actual
      this.currentStepIndex.update(index => index + 1);
    }
  }

  // 🎯 Método para retroceder (decrementa el índice)
  goBack(): void {
    if (this.canGoBack()) {
      this.currentStepIndex.update(index => index - 1);
    }
  }

  // 🎯 Método para saltar a un paso específico (usado por las bolitas)
  goToStep(index: number): void {
      this.currentStepIndex.set(index);
  }
}
