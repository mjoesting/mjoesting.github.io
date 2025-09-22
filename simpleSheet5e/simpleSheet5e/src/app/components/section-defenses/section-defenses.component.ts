import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionDefenses, SectionDefensesFormFields } from '../../models';

@Component({
  selector: 'section-defenses',
  imports: [],
  templateUrl: './section-defenses.component.html',
  styleUrl: './section-defenses.component.scss'
})
export class SectionDefensesComponent {
  @Input() data!: SectionDefenses;
  @Input() form!: DynamicFormGroup<SectionDefensesFormFields>;
}
