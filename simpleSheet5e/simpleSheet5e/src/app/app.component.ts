import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SheetFormSections, StoreData } from './models';
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
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, SectionAbilitiesComponent, SectionDefensesComponent, SectionGeneralComponent, SectionHealthComponent, SectionMainComponent, SectionProficienciesComponent, SectionSavingThrowsComponent, SectionSkillsComponent, ReactiveFormsModule],
  providers: [SimpleSheetService, MapperService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  data!: StoreData;
  form!: SheetFormSections;
  isUpdated: boolean = false;
  private isUpdatedSubscription!: Subscription;

  constructor(private service: SimpleSheetService) {
    this.service.initData();
    this.isUpdatedSubscription = this.service.store.state.isUpdated.subscribe((value: boolean) => {
      this.isUpdated = value;
    });
  };

  ngOnInit(): void {
    this.data = this.service.store as StoreData;
    this.form = this.data.state.form as SheetFormSections;

    console.log('app component this.data: ', this.data)
  }
}
