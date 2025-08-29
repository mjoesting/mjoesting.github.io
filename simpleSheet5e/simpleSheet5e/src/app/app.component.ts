import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Form, FormGroup } from '@angular/forms';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SectionAbilitiesComponent } from './components/section-abilities/section-abilities.component';
import { SectionDefensesComponent } from './components/section-defenses/section-defenses.component';
import { SectionGeneralComponent } from './components/section-general/section-general.component';
import { SectionHealthComponent } from './components/section-health/section-health.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionProficienciesComponent } from './components/section-proficiencies/section-proficiencies.component';
import { SectionSavingThrowsComponent } from './components/section-saving-throws/section-saving-throws.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { storeData } from './models';
import { Service } from './service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent, SectionAbilitiesComponent, SectionDefensesComponent, SectionGeneralComponent, SectionHealthComponent, SectionMainComponent, SectionProficienciesComponent, SectionSavingThrowsComponent, SectionSkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  data: storeData;
  form!: FormGroup;

  constructor(private service: Service) {
    this.data = this.service.initData();
    };

    initForm(): void {
      // form group for proficiencies, 4 controls
      let proficienciesFormGroup: FormGroup = new FormGroup();
      // form group fof saving throws, 2 controls each
      let savingThrowsFormGroup: FormGroup = new FormGroup();
      // form group for each skill, 2 controls each
      let skillsFomGroup: FormGroup = new FormGroup();
    }
}
