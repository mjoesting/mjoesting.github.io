import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionHealth, SectionHealthFormFields } from '../../models';

@Component({
  selector: 'section-health',
  imports: [],
  templateUrl: './section-health.component.html',
  styleUrl: './section-health.component.scss'
})
export class SectionHealthComponent {
  @Input() data!: SectionHealth;
  @Input() form!: DynamicFormGroup<SectionHealthFormFields>;
}
