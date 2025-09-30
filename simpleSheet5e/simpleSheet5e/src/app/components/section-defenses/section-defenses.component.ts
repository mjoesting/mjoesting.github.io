import { Component, Input } from '@angular/core';
import { SectionDefenses, SectionDefensesFormFields } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'section-defenses',
  imports: [],
  templateUrl: './section-defenses.component.html',
  styleUrl: './section-defenses.component.scss'
})
export class SectionDefensesComponent {
  @Input() data!: SectionDefenses;
  @Input() form!: FormGroup<SectionDefensesFormFields>;
}
