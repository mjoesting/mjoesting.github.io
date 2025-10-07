import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbilityFormGroup, SectionAbilities, SectionAbilitiesFormFields } from '../../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SimpleSheetService } from '../../services/service';

@Component({
  selector: 'section-abilities',
  imports: [ReactiveFormsModule],
  templateUrl: './section-abilities.component.html',
  styleUrl: './section-abilities.component.scss'
})
export class SectionAbilitiesComponent implements OnInit, OnDestroy {
  @Input() data!: SectionAbilities;
  @Input() abilitiesForm!: FormGroup<SectionAbilitiesFormFields>;
  formSectionSubscription!: Subscription;

  constructor(private simpleSheetService: SimpleSheetService) {};

  get abilitiesGroupsArray(): FormGroup<AbilityFormGroup>[] {
    const formGroups: FormGroup<AbilityFormGroup>[] = [];
    for (let ability of Object.values(this.abilitiesForm.controls)) {
      formGroups.push(ability as FormGroup<AbilityFormGroup>);
    }

    return formGroups;
  }

  ngOnInit() {
    this.formSectionSubscription = this.abilitiesForm.valueChanges
    .subscribe((value: any) => this.simpleSheetService.handleFormUpdates(value, 'SectionAbilities'));
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }
}
