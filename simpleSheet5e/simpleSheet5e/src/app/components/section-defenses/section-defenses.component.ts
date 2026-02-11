import { Component, DestroyRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { SectionDefenses, SectionDefensesFormFields } from '../../models';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'section-defenses',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-defenses.component.html',
  styleUrl: './section-defenses.component.scss'
})
export class SectionDefensesComponent implements OnInit, OnDestroy {
  @Input() data!: SectionDefenses;
  @Input() defensesForm!: FormGroup<SectionDefensesFormFields>;
  destroyRef = inject(DestroyRef);
  formSectionSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.formSectionSubscription = this.defensesForm.valueChanges
    // .subscribe((value: any) => this.simpleSheetService.handleFormUpdates(value, 'SectionDefenses'));
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }
}
