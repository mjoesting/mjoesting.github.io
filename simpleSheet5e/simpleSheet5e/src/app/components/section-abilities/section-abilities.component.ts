import { Component, Input, OnInit } from '@angular/core';
import { AbilityFormGroup, SectionAbilities, SectionAbilitiesFormFields } from '../../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'section-abilities',
  imports: [ReactiveFormsModule],
  templateUrl: './section-abilities.component.html',
  styleUrl: './section-abilities.component.scss'
})
export class SectionAbilitiesComponent implements OnInit {
  @Input() data!: SectionAbilities;
  @Input() abilitiesForm!: FormGroup<SectionAbilitiesFormFields>;

  get abilitiesGroupsArray(): FormGroup<AbilityFormGroup>[] {
    const formGroups: FormGroup<AbilityFormGroup>[] = [];
    for (let ability of Object.values(this.abilitiesForm.controls)) {
      formGroups.push(ability as FormGroup<AbilityFormGroup>);
    }

    return formGroups;
  }

  ngOnInit() {
    console.log('abilities component loaded')
    console.log('abilitiesGroupsArray: ', this.abilitiesGroupsArray)
  }
}
