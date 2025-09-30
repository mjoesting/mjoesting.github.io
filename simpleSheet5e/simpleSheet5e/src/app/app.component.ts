import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SheetFormFields, StoreData } from './models';
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
  form!: FormGroup<SheetFormFields>;
  isUpdated: boolean = false;
  private formValueSubscription!: Subscription | undefined;

  constructor(private service: SimpleSheetService, private mapperService: MapperService) {};

  ngOnInit(): void {
    this.data = this.service.initData() as StoreData;
    this.form = this.mapperService.mapSheetToForm(this.data.sheet) as FormGroup<SheetFormFields>;

    console.log('app component - service.initData(): ', this.service.initData())
    console.log('app component - data: ', this.data)
    console.log('app component - form: ', this.form)
    
    this.formValueSubscription = this.form.valueChanges.subscribe(update => {
      console.log('form update: ', update)

      this.isUpdated = true;
      this.service.handleFormUpdates(this.form);
    });
  }

  ngOnDestroy(): void {
    this.formValueSubscription!.unsubscribe();
  }
}
