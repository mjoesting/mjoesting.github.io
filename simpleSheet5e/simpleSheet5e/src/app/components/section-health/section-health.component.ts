import { Component, Input } from '@angular/core';
import { DynamicFormGroup, SectionHealth, SectionHealthFormFields } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'section-health',
  imports: [ButtonComponent],
  templateUrl: './section-health.component.html',
  styleUrl: './section-health.component.scss'
})
export class SectionHealthComponent {
  @Input() data!: SectionHealth;
  @Input() form!: DynamicFormGroup<SectionHealthFormFields>;

  handleLongRest() {
    // logic for long rest
  }

  handleShortRest() {
    // logic for short rest
  }
}
