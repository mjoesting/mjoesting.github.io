import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SectionGeneral, SectionGeneralFormFields } from '../../models';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'section-general',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-general.component.html',
  styleUrl: './section-general.component.scss'
})
export class SectionGeneralComponent implements OnInit, OnDestroy {
  @Input() data!: SectionGeneral;
  @Input() generalForm!: FormGroup<SectionGeneralFormFields>;
  formSectionSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.formSectionSubscription = this.generalForm.valueChanges
    // .subscribe((value: any) => this.dataService.handleFormUpdates(value, 'SectionGeneral'));
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }
}
