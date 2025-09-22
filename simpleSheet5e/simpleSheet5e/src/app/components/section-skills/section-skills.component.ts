import { Component, Input } from '@angular/core';
import { Skill, DynamicFormGroup, SectionSkills, SectionSkillsFormFields } from '../../models';
import * as Constants from '../../constants';

@Component({
  selector: 'section-skills',
  imports: [],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss'
})
export class SectionSkillsComponent {
  @Input() data!: SectionSkills;
  @Input() form!: DynamicFormGroup<SectionSkillsFormFields>;
  proficiencies: string[] = Object.keys(Constants.Proficiencies);
}
