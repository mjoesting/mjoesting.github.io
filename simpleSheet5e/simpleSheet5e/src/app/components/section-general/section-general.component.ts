import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SectionGeneral, SectionGeneralFormFields } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'section-general',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './section-general.component.html',
  styleUrl: './section-general.component.scss'
})
export class SectionGeneralComponent {
  @Input() data!: SectionGeneral;
  @Input() generalForm!: FormGroup<SectionGeneralFormFields>;

  handleAddClass() {
    // logic to add a new class
  }
}
