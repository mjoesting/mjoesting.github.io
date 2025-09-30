import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SectionSkills, SkillFormGroup } from '../../models';
import * as Constants from '../../constants';

@Component({
  selector: 'section-skills',
  imports: [ReactiveFormsModule],
  templateUrl: './section-skills.component.html',
  styleUrl: './section-skills.component.scss'
})
export class SectionSkillsComponent implements OnInit {
  @Input() data!: SectionSkills;
  @Input() form!: FormArray<FormGroup<SkillFormGroup>>;
  proficiencies: string[] = Object.keys(Constants.Proficiencies);

  ngOnInit() {
    console.log('skills component - form: ', this.form)
  }
}
