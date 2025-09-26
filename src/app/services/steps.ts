import { Injectable } from '@angular/core';
import { iStep } from '../models/istep';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  private steps: iStep[] = [
    {
      title: 'Dedica moltes hores',
      description:
        'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: '/step1.svg',
      bgcolor: '#4CB5AE',
    },
    {
      title: 'Programa projectes propis:',
      description:
        'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      img: '/step2.svg',
      bgcolor: '#C1C7CE',
    },
    {
      title: 'Procura descansar:',
      description:
        "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.",
      img: '/step3.svg',
      bgcolor: '#FFD166',
    },
  ];

  getSteps(): iStep[] {
    return this.steps;
  }
}
