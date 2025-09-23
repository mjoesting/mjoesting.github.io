import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionGeneral, SectionGeneralFormFields } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'section-general',
  imports: [ButtonComponent],
  templateUrl: './section-general.component.html',
  styleUrl: './section-general.component.scss'
})
export class SectionGeneralComponent {
  @Input() data!: SectionGeneral;
  @Input() form!: DynamicFormGroup<SectionGeneralFormFields>;

  handleAddClass() {
    // logic to add a new class
  }
}
