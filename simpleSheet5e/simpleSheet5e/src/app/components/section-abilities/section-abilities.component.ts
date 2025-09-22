import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Ability, DynamicFormGroup, SectionAbilities, SectionAbilitiesFormFields } from '../../models';

@Component({
  selector: 'section-abilities',
  imports: [],
  templateUrl: './section-abilities.component.html',
  styleUrl: './section-abilities.component.scss'
})
export class SectionAbilitiesComponent implements OnInit {
  @Input() data!: SectionAbilities;
  @Input() form!: DynamicFormGroup<SectionAbilitiesFormFields>;
  abilitiesData: Ability[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    Object.keys(this.data).map((key: string) => this.abilitiesData.push(this.data[key] as Ability));
    this.changeDetectorRef.detectChanges();
  }
}
