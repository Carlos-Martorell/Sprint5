import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home';
import { StepsService } from '../../services/steps';
import { EscenaComponent } from '../escena/escena';
import { iStep } from '../../models/istep';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

const MOCK_STEPS: iStep[] = [
  { title: 'Paso 1', description: 'd1', img: 'i1', bgcolor: '#111' },
  { title: 'Paso 2', description: 'd2', img: 'i2', bgcolor: '#222' },
  { title: 'Paso 3', description: 'd3', img: 'i3', bgcolor: '#333' },
];

const mockStepsService = {
  getSteps: () => MOCK_STEPS,
};

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, EscenaComponent],
      providers: [{ provide: StepsService, useValue: mockStepsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los pasos al inicializarse (ngOnInit)', () => {
    expect(component.steps().length).toBe(MOCK_STEPS.length);
    expect(component.steps()[0].title).toBe('Paso 1');
  });

  it('currentStepIndex debe ser 0 al inicio y currentStep debe ser el primer paso', () => {
    expect(component.currentStepIndex()).toBe(0);
    expect(component.currentStep().title).toBe('Paso 1');
  });

  it('canGoBack debe ser falso en el primer paso', () => {
    expect(component.canGoBack()).toBeFalse();
  });

  it('canGoForward debe ser verdadero en el primer paso', () => {
    expect(component.canGoForward()).toBeTrue();
  });

  it('canGoForward debe ser falso en el último paso', () => {
    component.currentStepIndex.set(MOCK_STEPS.length - 1);
    expect(component.canGoForward()).toBeFalse();
  });

  it('goForward() debe incrementar el índice y cambiar la dirección', fakeAsync(() => {
    expect(component.currentStepIndex()).toBe(0);

    component.goForward();

    expect(component.showEscena()).toBeFalse();
    expect(component.animationDirection()).toBe('forward');

    tick(300);

    expect(component.currentStepIndex()).toBe(1);
    expect(component.showEscena()).toBeTrue();
    expect(component.canGoBack()).toBeTrue();
  }));

  it('goBack() debe decrementar el índice y cambiar la dirección', fakeAsync(() => {
    component.currentStepIndex.set(1);
    expect(component.canGoBack()).toBeTrue();

    component.goBack();

    expect(component.animationDirection()).toBe('backward');
    tick(300);

    expect(component.currentStepIndex()).toBe(0);
    expect(component.canGoBack()).toBeFalse();
  }));

  it('goToStep() debe ir al índice correcto y establecer la dirección', fakeAsync(() => {
    component.goToStep(2);
    expect(component.animationDirection()).toBe('forward');
    tick(300);
    expect(component.currentStepIndex()).toBe(2);

    component.goToStep(0);
    expect(component.animationDirection()).toBe('backward');
    tick(300);
    expect(component.currentStepIndex()).toBe(0);
  }));

  it('debería renderizar EscenaComponent y pasar el currentStep correcto', () => {
    fixture.detectChanges();

    const escenaEl = debugElement.query(By.directive(EscenaComponent));

    expect(escenaEl).toBeTruthy();

    const boundStep = escenaEl.componentInstance.stepData;
    expect(boundStep.title).toBe('Paso 1');

    component.currentStepIndex.set(1);
    fixture.detectChanges();

    const newBoundStep = debugElement.query(By.directive(EscenaComponent)).componentInstance
      .stepData;
    expect(newBoundStep.title).toBe('Paso 2');
  });
});
