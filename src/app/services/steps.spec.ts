import { TestBed } from '@angular/core/testing';
import { StepsService } from './steps';

describe('StepsService', () => {
  let service: StepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepsService);
  });

  it('debería estar creado', () => {
    expect(service).toBeTruthy();
  });

  it('debería devolver 3 pasos con la lógica correcta', () => {
    const steps = service.getSteps();
    expect(steps.length).toBe(3);
    expect(steps[0].title).toBe('Dedica moltes hores');
  });
});
