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

  public steps = signal<iStep[]>([]);
  public currentStepIndex = signal<number>(0);
  public currentStep = computed(() => this.steps()[this.currentStepIndex()]);
  public canGoBack = computed(() => this.currentStepIndex() > 0);
  public canGoForward = computed(() => this.currentStepIndex() < this.steps().length - 1);
  public animationDirection = signal<'forward' | 'backward'>('forward');
  public showEscena = signal<boolean>(true);

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    this.steps.set(this.stepsService.getSteps());
  }

  changeStep(newIndex: number, direction: 'forward' | 'backward') {
    this.showEscena.set(false);
    this.animationDirection.set(direction);

    setTimeout(() => {
      this.currentStepIndex.set(newIndex);
      this.showEscena.set(true);
    }, 500);
  }

  goForward(): void {
    if (this.canGoForward()) {
      this.changeStep(this.currentStepIndex() + 1, 'forward');
    }
  }

  goBack(): void {
    if (this.canGoBack()) {
      this.changeStep(this.currentStepIndex() - 1, 'backward');
    }
  }

  goToStep(index: number): void {
      const isForward = index > this.currentStepIndex();
      this.changeStep(index, isForward ? 'forward' : 'backward');
  }

  onEnter(event: any): void {
    const element = event.target as HTMLElement;
    if (this.animationDirection() === 'forward') {
      element.classList.add('slide-in');
      setTimeout(() => element.classList.remove('slide-in'), 500);
    } else {
      element.classList.add('slide-in-reverse');
      setTimeout(() => element.classList.remove('slide-in-reverse'), 500);
    }
  }

  onLeave(event: any): void {
    const element = event.target as HTMLElement;
    if (this.animationDirection() === 'forward') {
      element.classList.add('slide-out');
      setTimeout(() => element.classList.remove('slide-out'), 500);
    } else {
      element.classList.add('slide-out-reverse');
      setTimeout(() => element.classList.remove('slide-out-reverse'), 500);
    }
  }
}
