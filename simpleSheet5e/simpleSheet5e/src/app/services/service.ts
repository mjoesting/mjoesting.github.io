import { FormGroup } from '@angular/forms';
import * as Constants from '../constants';
import { Ability, SaveData, SectionAbilities, SectionSavingThrows, SheetData, SheetFormSections, StoreData } from '../models';
import { MapperService } from './mapper-service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class SimpleSheetService {

    constructor(private mapperService: MapperService) {}

    store!: StoreData;

    initData(): void {
        let newData: StoreData;
        if (!localStorage.getItem('simpleSheet')) {
            newData = this.initNewData();
        } else {
            const storeData: StoreData = this.dataFromStorage();
            newData = {
                state: {
                    abilities: storeData.state.abilities,
                    form: this.mapperService.mapSheetToForm(storeData.sheet),
                    isUpdated: new BehaviorSubject<boolean>(false)
                },
                sheet: storeData.sheet
            };
        }
        this.store = newData;
        this.store.state.isUpdated.next(false);
    }

    initNewData(): StoreData {
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
                for(let key of Object.keys(Constants.Abilities)) {
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
                for(let key of Object.keys(Constants.Abilities)) {
                    initSavingThrowsData[key] = {
                        ability: key,
                        proficiency: null,
                        bonus: this.getDefaultAbilityModifier(10),
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

        const newStoreData: StoreData = {
            state: {
                isUpdated: new BehaviorSubject<boolean>(false),
                abilities: {
                    STR: 10,
                    DEX: 10,
                    CON: 10,
                    INT: 10,
                    WIS: 10,
                    CHA: 10
                },
                form: this.mapperService.mapSheetToForm(newSheetData)
            },
            sheet: newSheetData
        };

        return newStoreData;
    }

    handleFormUpdates<K extends keyof SheetData>(newFormValues: SheetData[K], sectionName: K): void {
        this.store.state.isUpdated.next(true);
        this.store.sheet[sectionName] = newFormValues;
        if (sectionName === 'SectionAbilities') {
            this.updateBonuses();
        }
    }

    saveToStorage(): void {
        const dataToSave: SaveData = {
            ...this.store,
            sheet: {
                ...this.store.sheet
            },
            state: {
                ...this.store.state,
                isUpdated: this.store.state.isUpdated.getValue(),
                form: null
            }
        }
        localStorage.setItem('simpleSheet', JSON.stringify(dataToSave));
        this.store.state.isUpdated.next(false);
    }

    dataFromStorage(): StoreData {
        return JSON.parse(localStorage.getItem('simpleSheet')!);
    }

    isCustom(defaultValue: number | null, currentValue: number | null) {
        return defaultValue == currentValue;
    }

    getDefaultBonus(object: any, store: StoreData) {
        if (!object.ability) {
            return null;
        } else {
            const abilityMod = this.getDefaultAbilityModifier(store.state!.abilities[object.ability]);
            const proficiencyBonus = this.getDefaultProficiencyBonus(Number(store.sheet!.SectionGeneral!.characterLevel));
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
                return null;
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
        this.store;
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
