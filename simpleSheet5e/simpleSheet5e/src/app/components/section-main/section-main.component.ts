import { Component, Input, ViewChild } from '@angular/core';
import { DynamicFormGroup, SectionMain, SectionMainFormFields } from '../../models';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'section-main',
  imports: [ButtonComponent],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss'
})
export class SectionMainComponent {
  @Input() data!: SectionMain;
  @Input() form!: DynamicFormGroup<SectionMainFormFields>;

  handleTabClick(event: Event) {
    const target: HTMLElement | null = event.target as HTMLElement;
    const tabId: string = target.id ? (target as HTMLElement).id : '';

    document.querySelectorAll('[role="tablist"] li').forEach((tab) => {
      tab.classList.remove('active');
    });
    document.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
      panel.classList.remove('active');
    });

    target.classList.add('active');
    document.getElementById(tabId)?.classList.add('active');
  }

  handleAddAction() {}

  handleAddBonusAction() {}

  handleAddReaction() {}

  handleAddSpecialAction() {}
}
