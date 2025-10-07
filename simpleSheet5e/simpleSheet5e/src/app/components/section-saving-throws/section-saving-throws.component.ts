import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import * as Constants from '../../constants';
import { SavingThrowFormGroup, SectionSavingThrows, SectionSavingThrowsFormFields } from '../../models';
import { SimpleSheetService } from '../../services/service';
import { Subscription } from 'rxjs';

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
  formSectionSubscription!: Subscription;

  constructor(private simpleSheetService: SimpleSheetService) {}

  ngOnInit() {
    this.formSectionSubscription = this.savingThrowsForm.valueChanges
    .subscribe((value: any) => this.simpleSheetService.handleFormUpdates(value, 'SectionSavingThrows'));
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }
  
  get savingThrowsGroupsArray(): FormGroup<SavingThrowFormGroup>[] {
    const formGroups: FormGroup<SavingThrowFormGroup>[] = [];
    for (let save of Object.values(this.savingThrowsForm.controls)) {
      formGroups.push(save as FormGroup<SavingThrowFormGroup>);
    }
    return formGroups;
  }
}
