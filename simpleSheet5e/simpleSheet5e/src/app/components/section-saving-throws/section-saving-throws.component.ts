import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as Constants from '../../constants';
import { SavingThrowFormGroup, SectionSavingThrows, SectionSavingThrowsFormFields } from '../../models';

@Component({
  selector: 'section-saving-throws',
  imports: [ReactiveFormsModule],
  templateUrl: './section-saving-throws.component.html',
  styleUrl: './section-saving-throws.component.scss'
})
export class SectionSavingThrowsComponent {
  @Input() data!: SectionSavingThrows;
  @Input() savingThrowsForm!: FormGroup<SectionSavingThrowsFormFields>;
  proficiencies = Object.keys(Constants.Proficiencies);
  
  get savingThrowsGroupsArray(): FormGroup<SavingThrowFormGroup>[] {
    const formGroups: FormGroup<SavingThrowFormGroup>[] = [];
    for (let save of Object.values(this.savingThrowsForm.controls)) {
      formGroups.push(save as FormGroup<SavingThrowFormGroup>);
    }
    return formGroups;
  }
}
