import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SectionAbilitiesComponent } from './components/section-abilities/section-abilities.component';
import { SectionDefensesComponent } from './components/section-defenses/section-defenses.component';
import { SectionGeneralComponent } from './components/section-general/section-general.component';
import { SectionHealthComponent } from './components/section-health/section-health.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionProficienciesComponent } from './components/section-proficiencies/section-proficiencies.component';
import { SectionSavingThrowsComponent } from './components/section-saving-throws/section-saving-throws.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { sheetData } from './models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent, SectionAbilitiesComponent, SectionDefensesComponent, SectionGeneralComponent, SectionHealthComponent, SectionMainComponent, SectionProficienciesComponent, SectionSavingThrowsComponent, SectionSkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  data: sheetData = {
    state: {
        isUpdated: false,
        abilities: {}
    },
    sheet: {
        SectionGeneral: null,
        SectionAbilities: null,
        SectionDefenses: null,
        SectionHealth: null,
        SectionMain: null,
        SectionProficiencies: null,
        SectionSavingThrows: null,
        SectionSkills: null
    }
  };
}
