import { Component, Input } from '@angular/core';
import { SectionMain, SectionMainFormFields } from '../../models';
import { ButtonComponent } from '../button/button.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'section-main',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './section-main.component.html',
  styleUrl: './section-main.component.scss'
})
export class SectionMainComponent {
  @Input() data!: SectionMain;
  @Input() mainForm!: FormGroup<SectionMainFormFields>;

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
