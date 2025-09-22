import { Component, OnInit } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SheetForm, StoreData } from './models';
import { Service } from './service';
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
  imports: [AppHeaderComponent, SectionAbilitiesComponent, SectionDefensesComponent, SectionGeneralComponent, SectionHealthComponent, SectionMainComponent, SectionProficienciesComponent, SectionSavingThrowsComponent, SectionSkillsComponent],
  providers: [Service],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  data!: StoreData;
  form!: SheetForm;

  constructor(private service: Service) {};

  ngOnInit() {
    this.data = this.service.initData();
    this.form = this.service.mapStoreDataToFormData(this.data);
    console.log('AppComponent data: ', this.data);
    console.log('AppComponent form: ', this.form);
  }
}
