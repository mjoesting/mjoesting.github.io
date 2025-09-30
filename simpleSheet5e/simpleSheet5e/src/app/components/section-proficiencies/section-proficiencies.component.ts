import { Component, Input } from '@angular/core';
import { SectionProficiencies, SectionProficienciesFormFields } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'section-proficiencies',
  imports: [],
  templateUrl: './section-proficiencies.component.html',
  styleUrl: './section-proficiencies.component.scss'
})
export class SectionProficienciesComponent {
  @Input() data!: SectionProficiencies;
  @Input() form!: FormGroup<SectionProficienciesFormFields>;
}
