import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionGeneral, SectionGeneralFormFields } from '../../models';

@Component({
  selector: 'section-general',
  imports: [],
  templateUrl: './section-general.component.html',
  styleUrl: './section-general.component.scss'
})
export class SectionGeneralComponent {
  @Input() data!: SectionGeneral;
  @Input() form!: DynamicFormGroup<SectionGeneralFormFields>;
}
