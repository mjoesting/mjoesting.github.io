import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SectionSkills, SkillFormGroup } from '../../models';
import * as Constants from '../../constants';

@Component({
  selector: 'section-skills',
  imports: [ReactiveFormsModule],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss'
})
export class SectionSkillsComponent {
  @Input() data!: SectionSkills;
  @Input() skillsForm!: FormArray<FormGroup<SkillFormGroup>>;
  proficiencies: string[] = Object.keys(Constants.Proficiencies);
}
