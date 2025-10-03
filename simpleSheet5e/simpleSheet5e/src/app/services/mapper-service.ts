import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Ability, AbilityFormGroup, SavingThrow, SavingThrowFormGroup, SectionAbilities, SectionAbilitiesFormFields, SectionDefenses, SectionDefensesFormFields, SectionGeneral, SectionGeneralFormFields, SectionHealth, SectionHealthFormFields, SectionMain, SectionMainFormFields, SectionProficiencies, SectionProficienciesFormFields, SectionSavingThrows, SectionSavingThrowsFormFields, SectionSkills, SectionSkillsFormFields, SheetData, SheetFormFields, Skill, SkillFormGroup } from "../models";
import { Injectable } from "@angular/core";
import * as Constants from "../constants";

@Injectable()
export class MapperService {
    constructor(private formBuilder: FormBuilder) {}

    mapSheetToForm(sheetData: SheetData): FormGroup<SheetFormFields> {
        return this.formBuilder.group({
            SectionGeneral: this.mapSheetSectionGeneralToForm(sheetData.SectionGeneral) as FormGroup<SectionGeneralFormFields>,
            SectionAbilities: this.mapSheetSectionAbilitiesToForm(sheetData.SectionAbilities) as FormGroup<SectionAbilitiesFormFields>,
            SectionSavingThrows: this.mapSheetSectionSavingThrowsToForm(sheetData.SectionSavingThrows) as FormGroup<SectionSavingThrowsFormFields>,
            SectionDefenses: this.mapSheetSectionDefensesToForm(sheetData.SectionDefenses) as FormGroup<SectionDefensesFormFields>,
            SectionHealth: this.mapSheetSectionHealthToForm(sheetData.SectionHealth) as FormGroup<SectionHealthFormFields>,
            SectionProficiencies: this.mapSheetSectionProficienciesToForm(sheetData.SectionProficiencies) as FormGroup<SectionProficienciesFormFields>,
            SectionSkills: this.mapSheetSectionSkillsToForm(sheetData.SectionSkills) as FormGroup<SectionSkillsFormFields>,
            SectionMain: this.mapSheetSectionMainToForm(sheetData.SectionMain) as FormGroup<SectionMainFormFields>
        }) as unknown as FormGroup<SheetFormFields>;
    }

    mapFormToSheet(form: FormGroup<SheetFormFields>): SheetData {
        return form.value as unknown as SheetData;
    }

    mapSheetSectionGeneralToForm(generalData: SectionGeneral): FormGroup<SectionGeneralFormFields> {
        return this.formBuilder.group({
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
        return this.formBuilder.group<AbilityFormGroup>({
            name: new FormControl(abilityData.name),
            score: new FormControl(abilityData.score),
            bonus: new FormControl(abilityData.bonus),
            customBonusModifiedBy: new FormControl(abilityData.customBonusModifiedBy)
        });
    }

    mapFormSectionAbilitiesToSheet(abilitiesForm: FormGroup<SectionAbilitiesFormFields>): SectionAbilities {
        return abilitiesForm.value as unknown as SectionAbilities;
    }

    mapSheetSectionDefensesToForm(defensesData: SectionDefenses): FormGroup<SectionDefensesFormFields> {
        return this.formBuilder.group<SectionDefensesFormFields>({
            ac: new FormControl(defensesData.ac),
            immunities: new FormControl(defensesData.immunities),
            resistances: new FormControl(defensesData.resistances)
        }) as unknown as FormGroup<SectionDefensesFormFields>;
    }

    mapFormSectionDefensesToSheet(defensesForm: FormGroup<SectionDefensesFormFields>): SectionDefenses {
        return defensesForm.value as unknown as SectionDefenses;
    }

    mapSheetSectionHealthToForm(healthData: SectionHealth): FormGroup<SectionHealthFormFields> {
        return this.formBuilder.group<SectionHealthFormFields>({
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
        return this.formBuilder.group({
            resources: new FormControl(mainData.resources),
            actions: new FormControl(mainData.actions),
            spells: new FormControl(mainData.spells),
            inventory: new FormControl(mainData.inventory),
            features: new FormControl(mainData.features),
            // spellModifiers: new FormGroup({
            //     ability: new FormControl(mainData.spellModifiers?.ability),
            //     attack: new FormControl(mainData.spellModifiers?.attack),
            //     saveDC: new FormControl(mainData.spellModifiers?.saveDC)
            // }),
            description: new FormControl(mainData.description),
            notes: new FormControl(mainData.notes)
        }) as unknown as FormGroup<SectionMainFormFields>;
    }

    mapFormSectionMainToSheet(mainForm: FormGroup<SectionMainFormFields>): SectionMain {
        return mainForm.value as unknown as SectionMain;
    }

    mapSheetSectionProficienciesToForm(proficienciesData: SectionProficiencies): FormGroup<SectionProficienciesFormFields> {
        return this.formBuilder.group<SectionProficienciesFormFields>({
            weapons: new FormControl(proficienciesData.weapons),
            armor: new FormControl(proficienciesData.armor),
            tools: new FormControl(proficienciesData.tools),
            languages: new FormControl(proficienciesData.languages),
        }) as unknown as FormGroup<SectionProficienciesFormFields>
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
        return this.formBuilder.group<SavingThrowFormGroup>({
            ability: new FormControl(savingThrowData.ability),
            proficiency: new FormControl(savingThrowData.proficiency),
            bonus: new FormControl(savingThrowData.bonus),
            customBonusModifiedBy: new FormControl(savingThrowData.customBonusModifiedBy)
        })
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
        return this.formBuilder.group<SkillFormGroup>({
            name: new FormControl(skillData.name, {nonNullable: true}),
            ability: new FormControl(skillData.ability, {nonNullable: true}),
            proficiency: new FormControl(skillData.proficiency!),
            bonus: new FormControl(skillData.bonus!),
            customBonusModifiedBy: new FormControl(skillData.customBonusModifiedBy!)
        }) as FormGroup<SkillFormGroup>;
    }

    mapFormSectionSkillsToSheet(skillsForm: FormGroup<SectionSkillsFormFields>): SectionSkills {
        return skillsForm.value as unknown as SectionSkills;
    }
}