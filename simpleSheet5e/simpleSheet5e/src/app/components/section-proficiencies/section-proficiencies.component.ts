import { Component, Input } from '@angular/core';
import { SectionProficiencies, SectionProficienciesFormFields } from '../../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'section-proficiencies',
  imports: [ReactiveFormsModule],
  templateUrl: './section-proficiencies.component.html',
  styleUrl: './section-proficiencies.component.scss'
})
export class SectionProficienciesComponent {
  @Input() data!: SectionProficiencies;
  @Input() proficienciesForm!: FormGroup<SectionProficienciesFormFields>;
}
