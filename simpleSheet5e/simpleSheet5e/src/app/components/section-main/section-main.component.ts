import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionMain, SectionMainFormFields } from '../../models';

@Component({
  selector: 'section-main',
  imports: [],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss'
})
export class SectionMainComponent {
  @Input() data!: SectionMain;
  @Input() form!: DynamicFormGroup<SectionMainFormFields>;
}
