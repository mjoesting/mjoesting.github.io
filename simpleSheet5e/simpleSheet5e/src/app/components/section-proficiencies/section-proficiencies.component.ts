import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SectionProficiencies, SectionProficienciesFormFields } from '../../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'section-proficiencies',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-proficiencies.component.html',
  styleUrl: './section-proficiencies.component.scss'
})
export class SectionProficienciesComponent implements OnInit, OnDestroy {
  @Input() data!: SectionProficiencies;
  @Input() proficienciesForm!: FormGroup<SectionProficienciesFormFields>;
  formSectionSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.formSectionSubscription = this.proficienciesForm.valueChanges
    // .subscribe((value: any) => this.dataService.handleFormUpdates(value, 'SectionProficiencies'));
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }
}
