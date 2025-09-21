import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { iStep } from '../../models/istep';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './escena.html',
  styleUrls: ['./escena.css']
})
export class EscenaComponent {

  @Input({ required: true }) public stepData!: iStep;
}
