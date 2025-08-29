import * as Constants from './constants';
import { Ability, SavingThrow, sheetData, storeData } from './models';

export class Service {
    initData(): storeData {
        if (!localStorage.getItem('data')) {
            // console.log('No data in storage, initializing new data');
            const newData = this.initNewData();
            localStorage.setItem('data', JSON.stringify(newData));
            return newData;
        } else {
            // console.log('Data found in storage, loading data');
            return this.dataFromStorage();
        }
    }

    initNewData(): storeData {
        const newData: storeData = {
            state: {
                isUpdated: false,
                abilities: {}
            },
            sheet: {
                SectionGeneral: null,
                SectionAbilities: null,
                SectionDefenses: null,
                SectionHealth: null,
                SectionMain: null,
                SectionProficiencies: null,
                SectionSavingThrows: {
                    savingThrows: []
                },
                SectionSkills: {
                    skills: []
                }
            }
        };
        // init abilities in state
        Object.keys(Constants.Abilities).map((ability: string) => newData.state.abilities[ability] = null);
        // init General section
        newData.sheet.SectionGeneral = {
            name: null,
            player: null,
            species: null,
            background: null,
            classes: [],
            characterLevel: null,
            proficiencyBonus: this.getDefaultProficiencyBonus(0)
        }
        // init Abilities section
        Object.keys(Constants.Abilities).map((ability: string) => newData.sheet.SectionAbilities![ability] = {
            ability: ability,
            score: null,
            bonus: this.getDefaultAbilityModifier(10),
            customBonusModifiedBy: null
        } as Ability)
        // init Defenses section
        newData.sheet.SectionDefenses = {
            ac: null,
            immunities: null,
            resistances: null
        }
        // init Health section
        newData.sheet.SectionHealth = {
            hpCurrent: null,
            hpMax: null,
            hpTemp: null,
            hitDice: null,
            conditions: null
        }
        // init Main section
        newData.sheet.SectionMain = {
            resources: null,
            actions: null,
            spellModifiers: null,
            spells: null,
            inventory: null,
            features: null,
            description: null,
            notes: null
        }
        // init Proficiencies section
        newData.sheet.SectionProficiencies = {
            weapons: null,
            armor: null,
            tools: null,
            languages: null
        }
        // init SavingThrows section
        Object.keys(Constants.Abilities).map((ability: string) => newData.sheet.SectionSavingThrows?.savingThrows?.push({
            ability: ability,
            proficient: null,
            bonus: this.getDefaultAbilityModifier(10),
            customBonusModifiedBy: null
        } as SavingThrow))
        // init Skills section
        Constants.Skills.map(skill => newData.sheet.SectionSkills?.skills?.push(skill);

        // console.log('initNewData(): ', newData);
        return newData;
    }

    saveToStorage(dataToSave: storeData) {
        if (dataToSave) {
            // console.log('store data type: ', typeof Store)
            localStorage.setItem('data', JSON.stringify(dataToSave));
            // console.log('saveToStorage() SAVED: ', this.loadFromStorage());
        }
    }

    dataFromStorage(): storeData {
        // console.log('loadFromStorage(): ', JSON.parse(localStorage.getItem('data')!));
        return JSON.parse(localStorage.getItem('data')!);
    }

    mapFormDataToStoreData(form) {
        // TODO: implement mapping form data to store data
    }

    updateStore(objectToUpdate?: any) {
        const rawStore = toRaw(Store);
        rawStore.state.isUpdated = true;
        if (objectToUpdate && !this.isCustom(this.getDefaultBonus(objectToUpdate), objectToUpdate.bonus)) {
            rawStore.state.abilities[objectToUpdate.ability];
            objectToUpdate.bonus = this.getDefaultBonus(objectToUpdate);
        }
    }

    updateBonuses(ability: string) {
        
    }

    isCustom(defaultValue: number | null, currentValue: number | null) {
        return defaultValue == currentValue;
    }

    getDefaultBonus(object: any) {
        if (!object.ability) {
            return null;
        } else {
            const abilityMod = this.getDefaultAbilityModifier(Store.sheet!.SectionAbilities[object.ability]!.score);
            const proficiencyBonus = this.getDefaultProficiencyBonus(Store.sheet!.SectionGeneral!.characterLevel);
            let proficiencyMod;
            switch(object.proficiency) {
                case Constants.Proficiencies.proficient:
                    proficiencyMod = proficiencyBonus;
                    break;
                case Constants.Proficiencies.expertise:
                    proficiencyMod = (proficiencyBonus * 2);
                    break;
                case Constants.Proficiencies.halfProficient:
                    proficiencyMod = (proficiencyBonus / 2);
                    break;
                default:
                proficiencyMod = 0;
            };
    
            return abilityMod! + proficiencyMod;
        }
    }

    getDefaultAbilityModifier(score: number | null) {
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

    longRest() {
        Store.sheet.sectionHealth.hpCurrent = Store.sheet.sectionHealth.hpMax;
        if (Store.sheet.sectionMain.resources) { // check for resources, and reset counters to max
            Store.sheet.sectionMain.resources.array.forEach((resource: any) => {
                resource.current = resource.max;
            });
        };
        Store.sheet.sectionHealth.hitDice += (Store.sheet.sectionHealth.hitDice / 2);
    }

    shortRest(hitDice: number) {
        Store.sheet.sectionHealth.hitDice -= hitDice;
    }
}
