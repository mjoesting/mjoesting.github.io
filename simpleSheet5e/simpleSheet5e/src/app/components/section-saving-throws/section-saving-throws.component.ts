import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as Constants from '../../constants';
import { SavingThrowFormGroup, SectionSavingThrows } from '../../models';

@Component({
  selector: 'section-saving-throws',
  imports: [ReactiveFormsModule],
  templateUrl: './section-saving-throws.component.html',
  styleUrl: './section-saving-throws.component.scss'
})
export class SectionSavingThrowsComponent {
  @Input() data!: SectionSavingThrows;
  @Input() savingThrowsForm!: FormArray<FormGroup<SavingThrowFormGroup>>;
  proficiencies = Object.keys(Constants.Proficiencies);
}
