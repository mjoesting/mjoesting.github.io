
import { Component, inject, Signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SheetData, SheetFormSections, StoreData } from './models';
import { DataService } from './services/data.service';
import { MapperService } from './services/mapper.service';
import { SectionAbilitiesComponent } from './components/section-abilities/section-abilities.component';
import { SectionDefensesComponent } from './components/section-defenses/section-defenses.component';
import { SectionHealthComponent } from './components/section-health/section-health.component';
import { SectionGeneralComponent } from './components/section-general/section-general.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionProficienciesComponent } from './components/section-proficiencies/section-proficiencies.component';
import { SectionSavingThrowsComponent } from './components/section-saving-throws/section-saving-throws.component';
import { SectionSkillsComponent } from './components/section-skills/section-skills.component';
import { StoreService } from './state/store.service';
import { patchState, signalState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent, SectionAbilitiesComponent, SectionDefensesComponent, SectionGeneralComponent, SectionHealthComponent, SectionMainComponent, SectionProficienciesComponent, SectionSavingThrowsComponent, SectionSkillsComponent, ReactiveFormsModule],
  providers: [DataService, MapperService, StoreService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  sheet!: SheetData;
  form!: SheetFormSections;
  sheetUpdated!: boolean;

  private store: Signal<StoreData>;

  constructor(
    private dataService: DataService,
    private mapperService: MapperService,
    private storeService: StoreService
) {
    this.store = this.storeService.store();
    this.sheet = this.storeService.store.sheet() as SheetData;    
    this.form = this.storeService.store.state.form() as SheetFormSections;
    this.sheetUpdated = this.storeService.store.state.sheetUpdated();
  }

  onAbilitiesUpdated() {
    if (this.isFormUpdated()) {
      this.updateData(this.dataService.getDataWithUpdatedBonuses(this.mapperService.mapFormToSheet(this.form)));
    }
  }

  updateData(sheetData: SheetData): void {
    const currentStore = this.storeService.getCurrentStoreData();
    this.form.SectionAbilities.markAsPristine();
    const newState: StoreData = {
      ...currentStore,
      sheet: sheetData,
      state: {
        abilities: this.mapperService.mapSheetSectionAbilitiesToState(sheetData.SectionAbilities),
        form: this.form,
        sheetUpdated: true }
    };
    this.storeService.updateState(newState).subscribe((updatedData: StoreData) => {
      this.sheet = updatedData.sheet;
      this.updateForm(this.mapperService.mapSheetToForm(updatedData.sheet));
      this.sheetUpdated = updatedData.state.sheetUpdated;
    });
  }

  updateForm(formData: SheetFormSections): void {
    for (let sectionKey of Object.keys(formData)) {
      (this.form as any)[sectionKey].patchValue((formData as any)[sectionKey].value);
    }
  }

  isFormUpdated(): boolean {
    return this.form.SectionAbilities.dirty && (this.mapperService.mapSheetSectionAbilitiesToState(this.mapperService.mapFormSectionAbilitiesToSheet(this.form.SectionAbilities)) !== this.storeService.store.state.abilities);
  }
}
