import * as Constants from '../constants';
import { Ability, SaveData, SavingThrow, SectionAbilities, SectionSavingThrows, SectionSkills, SheetData, SheetFormSections, Skill, StateData, StoreData } from '../models';
import { MapperService } from './mapper-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { patchState, rxMethod, SignalState, signalState } from '@ngrx/signals';

@Injectable()
export class SimpleSheetService {

    constructor(private mapperService: MapperService) {}

    #state!: SignalState<StateData>;
    #sheet!: SignalState<SheetData>;

    initData(): void {
        let newData: StoreData;
        if (!localStorage.getItem('simpleSheet')) {
            const sheet = this.initNewData();
            const state: StateData = {
                abilities: this.mapperService.mapSheetSectionAbilitiesToState(sheet.SectionAbilities),
                form: this.mapperService.mapSheetToForm(sheet),
                isUpdated: false
            }
            newData = {
                state: state,
                sheet: sheet
            }
        } else {
            const storeData: StoreData = this.dataFromStorage();
            newData = {
                state: {
                    abilities: storeData.state.abilities,
                    form: this.mapperService.mapSheetToForm(storeData.sheet),
                    isUpdated: false
                },
                sheet: storeData.sheet
            };
        }
        this.#state = signalState(newData.state);
        this.#sheet = signalState(newData.sheet);
    };

    initNewData(): SheetData {
        const newSheetData: SheetData = {
            SectionGeneral: {
                name: null,
                player: null,
                species: null,
                background: null,
                classes: null,
                characterLevel: null,
                proficiencyBonus: this.getDefaultProficiencyBonus(0)
            },
            SectionAbilities: (() => {
                let initAbilitiesData: SectionAbilities = {};
                for(let key in Constants.Abilities) {
                    initAbilitiesData[key] = {
                        name: key,
                        score: 10,
                        bonus: this.getDefaultAbilityModifier(10),
                        customBonusModifiedBy: null
                    } as Ability;
                }
                return initAbilitiesData as SectionAbilities;
            })(),
            SectionDefenses: {
                ac: null,
                immunities: null,
                resistances: null 
            },
            SectionHealth: {
                hpCurrent: null,
                hpMax: null,
                hpTemp: null,
                hitDice: null,
                conditions: null
            },
            SectionMain: {
                resources: null,
                actions: null,
                spellModifiers: {
                    ability: 'INT',
                    attack: 0,
                    saveDC: 0
                },
                spells: null,
                inventory: null,
                features: null,
                description: null,
                notes: null
            },
            SectionProficiencies: {
                weapons: null,
                armor: null,
                tools: null,
                languages: null
            },
            SectionSavingThrows: (() => {
                let initSavingThrowsData: SectionSavingThrows = {};
                for(let key in Constants.Abilities) {
                    initSavingThrowsData[key] = {
                        ability: key,
                        proficiency: null,
                        bonus: this.getDefaultAbilityModifier(10) ?? 0,
                        customBonusModifiedBy: null
                    }
                }
                return initSavingThrowsData as SectionSavingThrows;
            })(),
            SectionSkills: {
                acrobatics: { name: 'acrobatics', ability: 'DEX', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                animalHandling: { name: 'animal handling', ability: 'WIS', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                arcana: { name: 'arcana', ability: 'INT', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                athletics: { name: 'athletics', ability: 'STR', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                deception: { name: 'deception', ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                history: { name: 'history', ability: 'INT', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                insight: { name: 'insight', ability: 'WIS', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                intimidation: { name: 'intimidation', ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                investigation: { name: 'investigation', ability: 'INT', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                medicine: { name: 'medicine', ability: 'WIS', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                nature: { name: 'nature', ability: 'INT', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                perception: { name: 'perception', ability: 'WIS', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                performance: { name: 'performance', ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                persuasion: { name: 'persuasion', ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                religion: { name: 'religion', ability: 'INT', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                sleightOfHand: { name: 'sleight of hand', ability: 'DEX', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                stealth: { name: 'stealth', ability: 'DEX', proficiency: '', bonus: 0, customBonusModifiedBy: null },
                survival: { name: 'survival', ability: 'WIS', proficiency: '', bonus: 0, customBonusModifiedBy: null}
            }
        };

        return newSheetData;
    }

    getCurrentState(): StateData {
        console.log('Getting current state: ', this.#state);
        return this.#state;
    }

    getCurrentSheet(): SheetData {
        console.log('Getting current sheet: ', this.#sheet);
        return this.#sheet;
    }

    handleFormUpdates<K extends keyof SheetData>(newFormValues: SheetData[K], sectionName: K): void {
        const formMapper = `mapShee${sectionName}ToForm`;
        this.#state.isUpdated.next(true);
        this.#sheet[sectionName] = newFormValues;
        if (sectionName === Constants.Sections.SectionAbilities) {
            this.updateBonuses();
        }
    }

    saveToStorage(): void {
        const dataToSave: SaveData = {
            sheet: {
                ...this.#sheet
            },
            state: {
                abilities: {
                    STR: this.#sheet.SectionAbilities[Constants.Abilities.STR]!.score,
                    DEX: this.#sheet.SectionAbilities[Constants.Abilities.DEX]!.score,
                    CON: this.#sheet.SectionAbilities[Constants.Abilities.CON]!.score,
                    INT: this.#sheet.SectionAbilities[Constants.Abilities.INT]!.score,
                    WIS: this.#sheet.SectionAbilities[Constants.Abilities.WIS]!.score,
                    CHA: this.#sheet.SectionAbilities[Constants.Abilities.CHA]!.score,
                },
                isUpdated: this.#state.isUpdated.getValue(),
                form: null
            }
        }
        localStorage.setItem('simpleSheet', JSON.stringify(dataToSave));
        this.#state.isUpdated.next(false);
    }

    dataFromStorage(): StoreData {
        return JSON.parse(localStorage.getItem('simpleSheet')!);
    }

    isCustom(defaultValue: number | null, currentValue: number | null) {
        console.log('isCustom? ', (defaultValue == currentValue));
        return defaultValue == currentValue;
    }

    getDefaultBonus(object: any) {
        if (!object.ability) {
            return null;
        } else {
            const abilityMod = this.getDefaultAbilityModifier(this.#state!.abilities[object.ability]);
            const proficiencyBonus = this.getDefaultProficiencyBonus(Number(this.#sheet!.SectionGeneral!.characterLevel));
            let proficiencyMod;
            switch(object.proficiency) {
                case Constants.Proficiencies['proficient']:
                    proficiencyMod = proficiencyBonus;
                    break;
                case Constants.Proficiencies['expertise']:
                    proficiencyMod = (proficiencyBonus * 2);
                    break;
                case Constants.Proficiencies['halfProficient']:
                    proficiencyMod = (proficiencyBonus / 2);
                    break;
                default:
                proficiencyMod = 0;
            };
    
            return abilityMod! + proficiencyMod;
        }
    }

    getDefaultAbilityModifier(score: number) {
        switch(true) {
            case (score! >= 20):
                return 5;
            case (score! >= 18):
                return 4;
            case (score! >= 16):
                return 3;
            case (score! >= 14):
                return 2;
            case (score! >= 12):
                return 1;
            case (score! >= 10):
                return 0;
            case (score! >= 8):
                return -1;
            case (score! >= 6):
                return -2;
            case (score! >= 4):
                return -3;
            case (score! < 4):
                return -4;
            default:
                return 0;
        }
    }

    getDefaultProficiencyBonus(level: number) {
        switch(true) {
            case (level < 4):
                return 2;
            case (level < 8):
                return 3;
            case (level < 12):
                return 4;
            case (level < 16):
                return 5;
            case (level < 20):
                return 6;
            default:
                return 7;
        }
    }

    updateBonuses(): void {
        let updatedSheetData: SheetData = this.#sheet;
        let defaultBonuses: {[key: string]: number} = {};
        const newAbilities: SectionAbilities = this.#sheet.SectionAbilities;
        const storedAbilities: {[key: string]: number} = this.#state.abilities;

        for (let a in Constants.Abilities) {
            defaultBonuses[a] = this.getDefaultAbilityModifier(newAbilities[a]!.score)
        }

        for (let section of Object.keys(updatedSheetData)) {
            switch (section) {
                case Constants.Sections.SectionAbilities:
                    for (let ability in Constants.Abilities) {
                        const abilityData = updatedSheetData.SectionAbilities[ability];
                        if (abilityData && abilityData.customBonusModifiedBy === null) {
                            abilityData.bonus = defaultBonuses[ability];
                        }
                    }
                    break;
                case Constants.Sections.SectionDefenses:
                    break;
                case Constants.Sections.SectionGeneral:
                    break;
                case Constants.Sections.SectionHealth:
                    break;
                case Constants.Sections.SectionMain:
                    break;
                case Constants.Sections.SectionProficiencies:
                    break;
                case Constants.Sections.SectionSavingThrows:
                    let updatedSavingThrowsSection = updatedSheetData.SectionSavingThrows;
                    
                    for (let ability in Constants.Abilities) {
                        const savingThrowData = updatedSheetData.SectionSavingThrows[ability];
                        if (savingThrowData.customBonusModifiedBy === null) {
                            savingThrowData.bonus = defaultBonuses[ability]!;
                        }
                    }

                    updatedSheetData.SectionSavingThrows = updatedSavingThrowsSection;
                    this.#state.form!.SectionSavingThrows = this.mapperService.mapSheetSectionSavingThrowsToForm(updatedSavingThrowsSection);
                    break;
                case Constants.Sections.SectionSkills:
                    let updatedSkillsSection = updatedSheetData.SectionSkills;
                    
                    for (let skill in Constants.Skills) {
                        let skillData: Skill = updatedSheetData.SectionSkills[skill as keyof SectionSkills];
                        const skillAbility: string = skillData.ability
                        if (!this.isCustom(skillData.bonus, defaultBonuses[skillAbility])) {
                            skillData.bonus = defaultBonuses[skillAbility];
                            updatedSkillsSection[skill as keyof SectionSkills] = skillData;
                        }
                    }

                    updatedSheetData.SectionSkills = updatedSkillsSection;
                    this.#state.form!.SectionSkills = this.mapperService.mapSheetSectionSkillsToForm(updatedSkillsSection);
                    break;
                default: return;
            }
        }

        this.#sheet = updatedSheetData;
    }

    // longRest() {
    //     Store.sheet.sectionHealth.hpCurrent = Store.sheet.sectionHealth.hpMax;
    //     if (Store.sheet.sectionMain.resources) { // check for resources, and reset counters to max
    //         Store.sheet.sectionMain.resources.array.forEach((resource: any) => {
    //             resource.current = resource.max;
    //         });
    //     };
    //     Store.sheet.sectionHealth.hitDice += (Store.sheet.sectionHealth.hitDice / 2);
    // }

    // shortRest(hitDice: number) {
    //     Store.sheet.sectionHealth.hitDice -= hitDice;
    // }
};
