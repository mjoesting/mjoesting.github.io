import { FormBuilder, FormGroup } from "@angular/forms";
import { Ability, AbilityFormGroup, SavingThrow, SavingThrowFormGroup, SectionAbilities, SectionAbilitiesFormFields, SectionDefenses, SectionDefensesFormFields, SectionGeneral, SectionGeneralFormFields, SectionHealth, SectionHealthFormFields, SectionMain, SectionMainFormFields, SectionProficiencies, SectionProficienciesFormFields, SectionSavingThrows, SectionSavingThrowsFormFields, SectionSkills, SectionSkillsFormFields, SheetData, SheetFormSections, Skill, SkillFormGroup } from "../models";
import { Injectable } from "@angular/core";
import * as Constants from "../constants";

@Injectable()
export class MapperService {
    constructor(private formBuilder: FormBuilder) {}

    mapSheetToForm(sheetData: SheetData): SheetFormSections {
        return {
            SectionGeneral: this.mapSheetSectionGeneralToForm(sheetData.SectionGeneral) as FormGroup<SectionGeneralFormFields>,
            SectionAbilities: this.mapSheetSectionAbilitiesToForm(sheetData.SectionAbilities) as FormGroup<SectionAbilitiesFormFields>,
            SectionSavingThrows: this.mapSheetSectionSavingThrowsToForm(sheetData.SectionSavingThrows) as FormGroup<SectionSavingThrowsFormFields>,
            SectionDefenses: this.mapSheetSectionDefensesToForm(sheetData.SectionDefenses) as FormGroup<SectionDefensesFormFields>,
            SectionHealth: this.mapSheetSectionHealthToForm(sheetData.SectionHealth) as FormGroup<SectionHealthFormFields>,
            SectionProficiencies: this.mapSheetSectionProficienciesToForm(sheetData.SectionProficiencies) as FormGroup<SectionProficienciesFormFields>,
            SectionSkills: this.mapSheetSectionSkillsToForm(sheetData.SectionSkills) as FormGroup<SectionSkillsFormFields>,
            SectionMain: this.mapSheetSectionMainToForm(sheetData.SectionMain) as FormGroup<SectionMainFormFields>
        };
    }

    mapFormToSheet(form: SheetFormSections): SheetData {
        return {
            SectionGeneral: form.SectionGeneral.value,
            SectionAbilities: form.SectionAbilities.value,
            SectionSavingThrows: form.SectionSavingThrows.value,
            SectionDefenses: form.SectionDefenses.value,
            SectionHealth: form.SectionHealth.value,
            SectionProficiencies: form.SectionProficiencies.value,
            SectionSkills: form.SectionSkills.value,
            SectionMain: form.SectionMain.value
        } as unknown as SheetData;
    }

    mapSheetSectionGeneralToForm(generalData: SectionGeneral): FormGroup<SectionGeneralFormFields> {
        return this.formBuilder.group<SectionGeneral>(generalData) as unknown as FormGroup<SectionGeneralFormFields>;
    }

    mapFormSectionGeneralToSheet(generalForm: FormGroup<SectionGeneralFormFields>): SectionGeneral {
        return generalForm.value as unknown as SectionGeneral;
    }

    mapSheetSectionAbilitiesToForm(abilitiesData: SectionAbilities): FormGroup<SectionAbilitiesFormFields> {
        const defaultAbility: Ability = {
            name: "",
            score: 0,
            bonus: 0,
            customBonusModifiedBy: ""
        };

        return this.formBuilder.group({
            STR: this.mapAbilityDataToFormGroup(abilitiesData["STR"] ?? defaultAbility),
            DEX: this.mapAbilityDataToFormGroup(abilitiesData["DEX"] ?? defaultAbility),
            CON: this.mapAbilityDataToFormGroup(abilitiesData["CON"] ?? defaultAbility),
            INT: this.mapAbilityDataToFormGroup(abilitiesData["INT"] ?? defaultAbility),
            WIS: this.mapAbilityDataToFormGroup(abilitiesData["WIS"] ?? defaultAbility),
            CHA: this.mapAbilityDataToFormGroup(abilitiesData["CHA"] ?? defaultAbility)
        }) as unknown as FormGroup<SectionAbilitiesFormFields>;
    }

    mapAbilityDataToFormGroup(abilityData: Ability): FormGroup<AbilityFormGroup> {
        return this.formBuilder.group<Ability>(abilityData);
    }

    mapFormSectionAbilitiesToSheet(abilitiesForm: FormGroup<SectionAbilitiesFormFields>): SectionAbilities {
        return abilitiesForm.value as unknown as SectionAbilities;
    }

    mapSheetSectionDefensesToForm(defensesData: SectionDefenses): FormGroup<SectionDefensesFormFields> {
        return this.formBuilder.group<SectionDefenses>(defensesData) as unknown as FormGroup<SectionDefensesFormFields>;
    }

    mapFormSectionDefensesToSheet(defensesForm: FormGroup<SectionDefensesFormFields>): SectionDefenses {
        return defensesForm.value as unknown as SectionDefenses;
    }

    mapSheetSectionHealthToForm(healthData: SectionHealth): FormGroup<SectionHealthFormFields> {
        return this.formBuilder.group<SectionHealth>(healthData) as unknown as FormGroup<SectionHealthFormFields>;
    }

    mapFormSectionHealthToSheet(healthForm: FormGroup<SectionHealthFormFields>): SectionHealth {
        return healthForm.value as unknown as SectionHealth;
    }

    mapSheetSectionMainToForm(mainData: SectionMain): FormGroup<SectionMainFormFields> {
        return this.formBuilder.group<SectionMain>(mainData) as unknown as FormGroup<SectionMainFormFields>;
    }

    mapFormSectionMainToSheet(mainForm: FormGroup<SectionMainFormFields>): SectionMain {
        return mainForm.value as unknown as SectionMain;
    }

    mapSheetSectionProficienciesToForm(proficienciesData: SectionProficiencies): FormGroup<SectionProficienciesFormFields> {
        return this.formBuilder.group<SectionProficiencies>(proficienciesData) as unknown as FormGroup<SectionProficienciesFormFields>
    }

    mapFormSectionProficienciesToSheet(proficienciesForm: FormGroup<SectionProficienciesFormFields>) {
        return proficienciesForm.value as unknown as SectionProficiencies;
    }

    mapSheetSectionSavingThrowsToForm(savingThrowsData: SectionSavingThrows): FormGroup<SectionSavingThrowsFormFields> {
        return this.formBuilder.group({
            STR: this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["STR"]]!),
            DEX: this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["DEX"]]!),
            CON: this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["CON"]]!),
            INT: this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["INT"]]!),
            WIS: this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["WIS"]]!),
            CHA: this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["CHA"]]!)
    }) as unknown as FormGroup<SectionSavingThrowsFormFields>
    }

    mapSavingThrowDataToFormGroup(savingThrowData: SavingThrow): FormGroup<SavingThrowFormGroup> {
        return this.formBuilder.group<SavingThrow>(savingThrowData)
    }

    mapFormSectionSavingThrowsToSheet(savingThrowsForm: FormGroup<SectionSavingThrowsFormFields>): SectionSavingThrows {
        return savingThrowsForm.value as unknown as SectionSavingThrows;
    }

    mapSheetSectionSkillsToForm(sectionSkillsData: SectionSkills): FormGroup<SectionSkillsFormFields> {
        return this.formBuilder.group({
            acrobatics: this.mapSkillDataToFormGroup(sectionSkillsData.acrobatics) as FormGroup<SkillFormGroup>,
            animalHandling: this.mapSkillDataToFormGroup(sectionSkillsData.animalHandling) as FormGroup<SkillFormGroup>,
            arcana: this.mapSkillDataToFormGroup(sectionSkillsData.arcana) as FormGroup<SkillFormGroup>,
            athletics: this.mapSkillDataToFormGroup(sectionSkillsData.athletics) as FormGroup<SkillFormGroup>,
            deception: this.mapSkillDataToFormGroup(sectionSkillsData.deception) as FormGroup<SkillFormGroup>,
            history: this.mapSkillDataToFormGroup(sectionSkillsData.history) as FormGroup<SkillFormGroup>,
            insight: this.mapSkillDataToFormGroup(sectionSkillsData.insight) as FormGroup<SkillFormGroup>,
            intimidation: this.mapSkillDataToFormGroup(sectionSkillsData.intimidation) as FormGroup<SkillFormGroup>,
            investigation: this.mapSkillDataToFormGroup(sectionSkillsData.investigation) as FormGroup<SkillFormGroup>,
            medicine: this.mapSkillDataToFormGroup(sectionSkillsData.medicine) as FormGroup<SkillFormGroup>,
            nature: this.mapSkillDataToFormGroup(sectionSkillsData.nature) as FormGroup<SkillFormGroup>,
            perception: this.mapSkillDataToFormGroup(sectionSkillsData.perception) as FormGroup<SkillFormGroup>,
            performance: this.mapSkillDataToFormGroup(sectionSkillsData.performance) as FormGroup<SkillFormGroup>,
            persuasion: this.mapSkillDataToFormGroup(sectionSkillsData.persuasion) as FormGroup<SkillFormGroup>,
            religion: this.mapSkillDataToFormGroup(sectionSkillsData.religion) as FormGroup<SkillFormGroup>,
            sleightOfHand: this.mapSkillDataToFormGroup(sectionSkillsData.sleightOfHand) as FormGroup<SkillFormGroup>,
            stealth: this.mapSkillDataToFormGroup(sectionSkillsData.stealth) as FormGroup<SkillFormGroup>,
            survival: this.mapSkillDataToFormGroup(sectionSkillsData.survival) as FormGroup<SkillFormGroup>
        });
    }

    mapSkillDataToFormGroup(skillData: Skill): FormGroup<SkillFormGroup> {
        return this.formBuilder.group<Skill>(skillData) as FormGroup<SkillFormGroup>;
    }

    mapFormSectionSkillsToSheet(skillsForm: FormGroup<SectionSkillsFormFields>): SectionSkills {
        return skillsForm.value as unknown as SectionSkills;
    }
}