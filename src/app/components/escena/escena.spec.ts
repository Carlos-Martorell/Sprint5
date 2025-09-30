import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EscenaComponent } from './escena';
import { iStep } from '../../models/istep';

const MOCK_STEP: iStep = {
  title: 'Test Title',
  description: 'Test Description',
  img: '/test.svg',
  bgcolor: '#FFF',
};

describe('EscenaComponent', () => {
  let component: EscenaComponent;
  let fixture: ComponentFixture<EscenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscenaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EscenaComponent);
    component = fixture.componentInstance;

    component.stepData = MOCK_STEP;

    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título del paso en el template', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(MOCK_STEP.title);
  });
});
