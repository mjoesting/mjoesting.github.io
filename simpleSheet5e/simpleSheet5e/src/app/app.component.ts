import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SheetData, SheetFormSections } from './models';
import { SimpleSheetService } from './services/service';
import { MapperService } from './services/mapper-service';
import { SectionAbilitiesComponent } from './components/section-abilities/section-abilities.component';
import { SectionDefensesComponent } from './components/section-defenses/section-defenses.component';
import { SectionHealthComponent } from './components/section-health/section-health.component';
import { SectionGeneralComponent } from './components/section-general/section-general.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionProficienciesComponent } from './components/section-proficiencies/section-proficiencies.component';
import { SectionSavingThrowsComponent } from './components/section-saving-throws/section-saving-throws.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, SectionAbilitiesComponent, SectionDefensesComponent, SectionGeneralComponent, SectionHealthComponent, SectionMainComponent, SectionProficienciesComponent, SectionSavingThrowsComponent, SectionSkillsComponent, ReactiveFormsModule],
  providers: [SimpleSheetService, MapperService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  sheet!: SheetData;
  form!: SheetFormSections;
  isUpdated: boolean = false;

  constructor(private service: SimpleSheetService) {
    this.service.initData();
    this.isUpdated = this.service.getCurrentState().isUpdated;
  };

  ngOnInit(): void {
    this.sheet = this.service.getCurrentSheet() as SheetData;
    this.form = this.service.getCurrentState().form as SheetFormSections;
  }

  onAbilitiesUpdated(sectionName: string) {
    console.log('AppComponent - onAbilitiesUpdated called for section: ', sectionName);
    // this.service.updateBonuses();
  }
}
