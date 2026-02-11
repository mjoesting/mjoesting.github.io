import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AbilityFormGroup, SectionAbilities, SectionAbilitiesFormFields } from '../../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'section-abilities',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-abilities.component.html',
  styleUrl: './section-abilities.component.scss'
})
export class SectionAbilitiesComponent implements OnInit, OnDestroy {
  @Input() data!: SectionAbilities;
  @Input() abilitiesForm!: FormGroup<SectionAbilitiesFormFields>;
  @Output() abilitiesUpdated = new EventEmitter<string>();
  formSectionSubscription!: Subscription;

  constructor(private dataService: DataService) {};

  get abilitiesGroupsArray(): FormGroup<AbilityFormGroup>[] {
    const formGroups: FormGroup<AbilityFormGroup>[] = [];
    for (let ability of Object.values(this.abilitiesForm.controls)) {
      formGroups.push(ability as FormGroup<AbilityFormGroup>);
    }

    return formGroups;
  }

  ngOnInit() {
    this.formSectionSubscription = this.abilitiesForm.valueChanges
    .subscribe(() => this.abilitiesUpdated.emit());
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }
}
