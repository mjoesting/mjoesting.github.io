import { Component, Input, OnInit } from '@angular/core';
import { SectionMain, SectionMainFormFields } from '../../models';
// import { ButtonComponent } from '../button/button.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'section-main',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss'
})
export class SectionMainComponent implements OnInit {
  @Input() data!: SectionMain;
  @Input() mainForm!: FormGroup<SectionMainFormFields>;
  formSectionSubscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // this.formSectionSubscription = this.mainForm.valueChanges
    // .subscribe((value: any) => this.simpleSheetService.handleFormUpdates(value, 'SectionMain'));
  }

  ngOnDestroy(): void {
    this.formSectionSubscription.unsubscribe();
  }

  handleTabClick(event: Event) {
    const target: HTMLElement | null = event.target as HTMLElement;
    const tabId = target.attributes.getNamedItem('data-target')?.value;
    const targetTab: HTMLElement | null = tabId ? document.getElementById(tabId) : null;

    document.querySelectorAll('[role="tablist"] li').forEach((tab) => {
      tab.classList.remove('active');
    });
    document.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
      panel.classList.remove('active');
    });

    target.classList.add('active');
    targetTab?.classList.add('active');
  }

  handleAddAction() {}

  handleAddBonusAction() {}

  handleAddReaction() {}

  handleAddSpecialAction() {}
}
