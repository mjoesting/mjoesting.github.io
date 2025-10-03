import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SectionSkills, SectionSkillsFormFields, SkillFormGroup } from '../../models';
import * as Constants from '../../constants';

@Component({
  selector: 'section-skills',
  imports: [ReactiveFormsModule],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss'
})
export class SectionSkillsComponent {
  @Input() data!: SectionSkills;
  @Input() skillsForm!: FormGroup<SectionSkillsFormFields>;
  proficiencies: string[] = Object.keys(Constants.Proficiencies);
    
    get skillsGroupsArray(): FormGroup<SkillFormGroup>[] {
      const formGroups: FormGroup<SkillFormGroup>[] = [];
      for (let skill of Object.values(this.skillsForm.controls)) {
        formGroups.push(skill as FormGroup<SkillFormGroup>);
      }
      return formGroups;
    }
}
