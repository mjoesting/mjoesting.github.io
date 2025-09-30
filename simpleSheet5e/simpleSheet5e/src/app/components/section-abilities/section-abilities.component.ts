import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Ability, SectionAbilities, SectionAbilitiesFormFields } from '../../models';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'section-abilities',
  imports: [],
  templateUrl: './section-abilities.component.html',
  styleUrl: './section-abilities.component.scss'
})
export class SectionAbilitiesComponent implements OnInit {
  @Input() data!: SectionAbilities;
  @Input() form!: FormGroup<SectionAbilitiesFormFields>;
  abilitiesData: Ability[] = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    Object.keys(this.data).map((key: string) => this.abilitiesData.push(this.data[key] as Ability));
    this.changeDetectorRef.detectChanges();
  }
}
