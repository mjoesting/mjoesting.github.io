import { Store } from './store';
import * as Constants from './constants';
import * as Constructors from './constructors';
import { toRaw } from 'vue';

export class Service {

    initNewData(): any {
        const newData: any = {
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
                SectionSavingThrows: null,
                SectionSkills: null
            }
        };

        Object.keys(Constants.Abilities).map(ability => newData.state.abilities[ability] = null);
        
        newData.sheet[Constants.Sections.SectionGeneral] = new Constructors.SectionGeneral(
            null, null, null, null, null, null, this.getDefaultProficiencyBonus(0)
        )
        newData.sheet[Constants.Sections.SectionAbilities] = new Constructors.SectionAbilities(
            Object.keys(Constants.Abilities).map(ability => new Constructors.Ability(
                ability, newData.state[ability], this.getDefaultAbilityModifier(10), null
            ))
        )
        newData.sheet[Constants.Sections.SectionDefenses] = new Constructors.SectionDefenses(
            null, null, null
        )
        newData.sheet[Constants.Sections.SectionHealth] = new Constructors.SectionHealth(
            null, null, null, null, null
        )
        newData.sheet[Constants.Sections.SectionMain] = new Constructors.SectionMain(
            null, null, null, null, null, null, null, null
        )
        newData.sheet[Constants.Sections.SectionProficiencies] = new Constructors.SectionProficiencies(
            null, null, null, null
        )
        newData.sheet[Constants.Sections.SectionSavingThrows] = new Constructors.SectionSavingThrows(
            Object.keys(Constants.Abilities).map(ability => new Constructors.SavingThrow(
                ability, newData.state[ability], newData.sheet[Constants.Sections.SectionAbilities].bonus, null
            ))
        )
        newData.sheet[Constants.Sections.SectionSkills] = new Constructors.SectionSkills(
            Constants.Skills.map(skill => new Constructors.Skill(
                skill.name, skill.ability, newData.state[skill.ability], newData.sheet[Constants.Sections.SectionAbilities].bonus, null
            ))
        )

        // console.log('initNewData(): ', newData);
        return newData;
    }

    initData() {
        let newData;
        if (this.loadFromStorage()) {
            console.log('initData(): YES LOCAL STORAGE');
            newData = this.loadFromStorage();
        } else {
            console.log('initData(): NO LOCAL STORAGE');
            newData = this.initNewData();
        }
        
        Store.state = newData.state;
        Store.sheet = newData.sheet;

        // console.log('initData(): ', Store);
        // console.log('initData(): ', Object.keys(Store));
    }

    saveToStorage() {
        // console.log('saveToStorage() SAVING: ', Store);

        if (Store) {
            // console.log('store data type: ', typeof Store)
            localStorage.setItem('data', JSON.stringify(Store));
            // console.log('saveToStorage() SAVED: ', this.loadFromStorage());
        }
        Store.state.isUpdated = false;
    }

    loadFromStorage(): any {
        // console.log('loadFromStorage(): ', JSON.parse(localStorage.getItem('data')!));
        return JSON.parse(localStorage.getItem('data')!);
    }

    get(section?: string): any {
        const data = toRaw(Store.sheet);
        return section ? data[section] : data;
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
