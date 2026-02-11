import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SectionHealth, SectionHealthFormFields } from '../../models';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'section-health',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './section-health.component.html',
  styleUrl: './section-health.component.scss'
})
export class SectionHealthComponent implements OnInit, OnDestroy {
  @Input() data!: SectionHealth;
  @Input() healthForm!: FormGroup<SectionHealthFormFields>;
  formSectionSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.formSectionSubscription = this.healthForm.valueChanges
    // .subscribe((value: any) => this.simpleSheetService.handleFormUpdates(value, 'SectionHealth'));
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }

  handleLongRest() {
    // logic for long rest
  }

  handleShortRest() {
    // logic for short rest
  }
}
