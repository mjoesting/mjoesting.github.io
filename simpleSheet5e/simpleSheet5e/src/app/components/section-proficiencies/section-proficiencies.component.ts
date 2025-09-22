import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionProficiencies, SectionProficienciesFormFields } from '../../models';

@Component({
  selector: 'section-proficiencies',
  imports: [],
  templateUrl: './section-proficiencies.component.html',
  styleUrl: './section-proficiencies.component.scss'
})
export class SectionProficienciesComponent {
  @Input() data!: SectionProficiencies;
  @Input() form!: DynamicFormGroup<SectionProficienciesFormFields>;
}
