import { FormArray, FormControl, FormGroup } from "@angular/forms";
import { Ability, AbilityFormGroup, SavingThrow, SavingThrowFormGroup, SectionAbilities, SectionDefenses, SectionDefensesFormFields, SectionGeneral, SectionGeneralFormFields, SectionHealth, SectionHealthFormFields, SectionMain, SectionMainFormFields, SectionProficiencies, SectionProficienciesFormFields, SectionSavingThrows, SectionSavingThrowsFormFields, SectionSkills, SheetData, SheetFormFields, Skill, SkillFormGroup } from "../models";
import { Injectable } from "@angular/core";
import * as Constants from "../constants";

@Injectable()
export class MapperService {

    mapSheetToForm(sheetData: SheetData): FormGroup<SheetFormFields> {
        return new FormGroup({
            SectionGeneral: this.mapSheetSectionGeneralToForm(sheetData.SectionGeneral) as FormGroup<SectionGeneralFormFields>,
            SectionAbilities: this.mapSheetSectionAbilitiesToForm(sheetData.SectionAbilities) as FormArray<FormGroup<AbilityFormGroup>>,
            SectionSavingThrows: this.mapSheetSectionSavingThrowsToForm(sheetData.SectionSavingThrows) as FormArray<FormGroup<SavingThrowFormGroup>>,
            SectionDefenses: this.mapSheetSectionDefensesToForm(sheetData.SectionDefenses) as FormGroup<SectionDefensesFormFields>,
            SectionHealth: this.mapSheetSectionHealthToForm(sheetData.SectionHealth) as FormGroup<SectionHealthFormFields>,
            SectionProficiencies: this.mapSheetSectionProficienciesToForm(sheetData.SectionProficiencies) as FormGroup<SectionProficienciesFormFields>,
            SectionSkills: this.mapSheetSectionSkillsToForm(sheetData.SectionSkills) as FormArray<FormGroup<SkillFormGroup>>,
            SectionMain: this.mapSheetSectionMainToForm(sheetData.SectionMain) as FormGroup<SectionMainFormFields>
        }) as unknown as FormGroup<SheetFormFields>;
    }

    mapFormToSheet(form: FormGroup<SheetFormFields>): SheetData {
        return form.value as unknown as SheetData;
    }

    mapSheetSectionGeneralToForm(generalData: SectionGeneral): FormGroup<SectionGeneralFormFields> {
        return new FormGroup<SectionGeneralFormFields>({
            name: new FormControl(generalData.name),
            player: new FormControl(generalData.player),
            species: new FormControl(generalData.species),
            background: new FormControl(generalData.background),
            classes: new FormControl(generalData.classes),
            characterLevel: new FormControl(generalData.characterLevel),
            proficiencyBonus: new FormControl(generalData.proficiencyBonus)
        }) as unknown as FormGroup<SectionGeneralFormFields>;
    }

    mapFormSectionGeneralToSheet(generalForm: FormGroup<SectionGeneralFormFields>): SectionGeneral {
        return generalForm.value as unknown as SectionGeneral;
    }

    mapSheetSectionAbilitiesToForm(abilitiesData: SectionAbilities): FormArray<FormGroup<AbilityFormGroup>> {
        const defaultAbility: Ability = {
            ability: "",
            score: 0,
            bonus: 0,
            customBonusModifiedBy: ""
        };

        return new FormArray<FormGroup<AbilityFormGroup>>([
            this.mapAbilityDataToFormGroup(abilitiesData["STR"] ?? defaultAbility),
            this.mapAbilityDataToFormGroup(abilitiesData["DEX"] ?? defaultAbility),
            this.mapAbilityDataToFormGroup(abilitiesData["CON"] ?? defaultAbility),
            this.mapAbilityDataToFormGroup(abilitiesData["INT"] ?? defaultAbility),
            this.mapAbilityDataToFormGroup(abilitiesData["WIS"] ?? defaultAbility),
            this.mapAbilityDataToFormGroup(abilitiesData["CHA"] ?? defaultAbility)
       ]) as unknown as FormArray<FormGroup<AbilityFormGroup>>;
    }

    mapAbilityDataToFormGroup(abilityData: Ability): FormGroup<AbilityFormGroup> {
        return new FormGroup<AbilityFormGroup>({
            name: new FormControl(abilityData.ability),
            score: new FormControl(abilityData.score),
            bonus: new FormControl(abilityData.bonus),
            customBonusModifiedBy: new FormControl(abilityData.customBonusModifiedBy)
        });
    }

    mapFormSectionAbilitiesToSheet(abilitiesForm: FormArray<FormGroup<AbilityFormGroup>>): SectionAbilities {
        return abilitiesForm.value as unknown as SectionAbilities;
    }

    mapSheetSectionDefensesToForm(defensesData: SectionDefenses): FormGroup<SectionDefensesFormFields> {
        return new FormGroup<SectionDefensesFormFields>({
            ac: new FormControl(defensesData.ac),
            immunities: new FormControl(defensesData.immunities),
            resistances: new FormControl(defensesData.resistances)
        }) as unknown as FormGroup<SectionDefensesFormFields>;
    }

    mapFormSectionDefensesToSheet(defensesForm: FormGroup<SectionDefensesFormFields>): SectionDefenses {
        return defensesForm.value as unknown as SectionDefenses;
    }

    mapSheetSectionHealthToForm(healthData: SectionHealth): FormGroup<SectionHealthFormFields> {
        return new FormGroup<SectionHealthFormFields>({
            hpCurrent: new FormControl(healthData.hpCurrent),
            hpMax: new FormControl(healthData.hpMax),
            hpTemp: new FormControl(healthData.hpTemp),
            conditions: new FormControl(healthData.conditions)
        }) as unknown as FormGroup<SectionHealthFormFields>;
    }

    mapFormSectionHealthToSheet(healthForm: FormGroup<SectionHealthFormFields>): SectionHealth {
        return healthForm.value as unknown as SectionHealth;
    }

    mapSheetSectionMainToForm(mainData: SectionMain): FormGroup<SectionMainFormFields> {
        return new FormGroup({
            resources: new FormControl(mainData.resources),
            actions: new FormControl(mainData.actions),
            spells: new FormControl(mainData.spells),
            inventory: new FormControl(mainData.inventory),
            features: new FormControl(mainData.features),
            spellModifiers: new FormGroup({
                ability: new FormControl(mainData.spellModifiers?.ability),
                attack: new FormControl(mainData.spellModifiers?.attack),
                saveDC: new FormControl(mainData.spellModifiers?.saveDC)
            }),
            description: new FormControl(mainData.description),
            notes: new FormControl(mainData.notes)
        }) as unknown as FormGroup<SectionMainFormFields>;
    }

    mapFormSectionMainToSheet(mainForm: FormGroup<SectionMainFormFields>): SectionMain {
        return mainForm.value as unknown as SectionMain;
    }

    mapSheetSectionProficienciesToForm(proficienciesData: SectionProficiencies): FormGroup<SectionProficienciesFormFields> {
        return new FormGroup<SectionProficienciesFormFields>({
            weapons: new FormControl(proficienciesData.weapons),
            armor: new FormControl(proficienciesData.armor),
            tools: new FormControl(proficienciesData.tools),
            languages: new FormControl(proficienciesData.languages),
        }) as unknown as FormGroup<SectionProficienciesFormFields>
    }

    mapFormSectionProficienciesToSheet(proficienciesForm: FormGroup<SectionProficienciesFormFields>) {
        return proficienciesForm.value as unknown as SectionProficiencies;
    }

    mapSheetSectionSavingThrowsToForm(savingThrowsData: SectionSavingThrows): FormArray<FormGroup<SavingThrowFormGroup>> {
        return new FormArray<FormGroup<SavingThrowFormGroup>>([
            this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["STR"]]!),
            this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["DEX"]]!),
            this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["CON"]]!),
            this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["INT"]]!),
            this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["WIS"]]!),
            this.mapSavingThrowDataToFormGroup(savingThrowsData[Constants.Abilities["CHA"]]!)
        ]) as unknown as FormArray<FormGroup<SavingThrowFormGroup>>
    }

    mapSavingThrowDataToFormGroup(savingThrowData: SavingThrow): FormGroup<SavingThrowFormGroup> {
        return new FormGroup<SavingThrowFormGroup>({
            ability: new FormControl(savingThrowData.ability),
            proficiency: new FormControl(savingThrowData.proficiency),
            bonus: new FormControl(savingThrowData.bonus),
            customBonusModifiedBy: new FormControl(savingThrowData.customBonusModifiedBy)
        })
    }

    mapFormSectionSavingThrowsToSheet(savingThrowsForm: FormGroup<SectionSavingThrowsFormFields>): SectionSavingThrows {
        return savingThrowsForm.value as unknown as SectionSavingThrows;
    }

    mapSheetSectionSkillsToForm(sectionSkillsData: SectionSkills): FormArray<FormGroup<SkillFormGroup>> {
        return new FormArray<FormGroup<SkillFormGroup>>([
            this.mapSkillDataToFormGroup(sectionSkillsData.acrobatics) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.animalHandling) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.arcana) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.athletics) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.deception) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.history) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.insight) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.intimidation) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.investigation) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.medicine) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.nature) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.perception) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.performance) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.persuasion) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.religion) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.sleightOfHand) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.stealth) as FormGroup<SkillFormGroup>,
            this.mapSkillDataToFormGroup(sectionSkillsData.survival) as FormGroup<SkillFormGroup>
        ]);
    }

    mapSkillDataToFormGroup(skillData: Skill): FormGroup<SkillFormGroup> {
        return new FormGroup<SkillFormGroup>({
            name: new FormControl(skillData.name, {nonNullable: true}),
            ability: new FormControl(skillData.ability, {nonNullable: true}),
            proficiency: new FormControl(skillData.proficiency!),
            bonus: new FormControl(skillData.bonus!),
            customBonusModifiedBy: new FormControl(skillData.customBonusModifiedBy!)
        }) as FormGroup<SkillFormGroup>;
    }

    mapFormSectionSkillsToSheet(skillsForm: FormArray<FormGroup<SkillFormGroup>>): SectionSkills {
        return skillsForm.value as unknown as SectionSkills;
    }
}