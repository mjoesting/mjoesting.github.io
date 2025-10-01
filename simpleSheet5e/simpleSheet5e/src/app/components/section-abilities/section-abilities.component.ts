import { Component, Input } from '@angular/core';
import { AbilityFormGroup, SectionAbilities } from '../../models';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'section-abilities',
  imports: [ReactiveFormsModule],
  templateUrl: './section-abilities.component.html',
  styleUrl: './section-abilities.component.scss'
})
export class SectionAbilitiesComponent {
  @Input() data!: SectionAbilities;
  @Input() abilitiesForm!: FormArray<FormGroup<AbilityFormGroup>>;
}
