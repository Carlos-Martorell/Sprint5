import { TestBed, ComponentFixture } from '@angular/core/testing';
import { App } from './app';
import { HomeComponent } from './components/home/home';
import { StepsService } from './services/steps';

const mockStepsService = {
  getSteps: () => [],
};

describe('AppComponent', () => {
  let fixture: ComponentFixture<App>;
  let component: App;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, HomeComponent],
      providers: [{ provide: StepsService, useValue: mockStepsService }],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  it('debería crear el componente App', () => {
    expect(component).toBeTruthy();
  });
});
