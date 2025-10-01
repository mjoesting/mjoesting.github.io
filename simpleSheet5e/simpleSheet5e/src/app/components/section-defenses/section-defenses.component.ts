import { Component, Input } from '@angular/core';
import { SectionDefenses, SectionDefensesFormFields } from '../../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'section-defenses',
  imports: [ReactiveFormsModule],
  templateUrl: './section-defenses.component.html',
  styleUrl: './section-defenses.component.scss'
})
export class SectionDefensesComponent {
  @Input() data!: SectionDefenses;
  @Input() defensesForm!: FormGroup<SectionDefensesFormFields>;
}
