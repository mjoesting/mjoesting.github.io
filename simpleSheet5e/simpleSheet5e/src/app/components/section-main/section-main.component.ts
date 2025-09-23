import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionMain, SectionMainFormFields } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'section-main',
  imports: [ButtonComponent],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss'
})
export class SectionMainComponent {
  @Input() data!: SectionMain;
  @Input() form!: DynamicFormGroup<SectionMainFormFields>;

  handleAddAction() {}

  handleAddBonusAction() {}

  handleAddReaction() {}

  handleAddSpecialAction() {}
}
