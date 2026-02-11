import { BehaviorSubject, Subject } from 'rxjs';
import * as Models from './models';
import { FormBuilder } from '@angular/forms';

const formBuilder = new FormBuilder();

export enum Sections {
    SectionGeneral = 'SectionGeneral',
    SectionAbilities = 'SectionAbilities',
    SectionDefenses = 'SectionDefenses',
    SectionHealth = 'SectionHealth',
    SectionMain = 'SectionMain',
    SectionProficiencies = 'SectionProficiencies',
    SectionSavingThrows = 'SectionSavingThrows',
    SectionSkills = 'SectionSkills'
}

export enum Abilities {
    STR = 'STR',
    DEX = 'DEX',
    CON = 'CON',
    INT = 'INT',
    WIS = 'WIS',
    CHA = 'CHA'
}

export enum Proficiencies {
    proficient = 'proficient',
    expertise = 'expertise',
    halfProficient = 'half-Proficient'
}

export enum ActionTypes {
    action = 'action',
    bonusAction = 'bonus action',
    reaction = 'reaction'
}

export enum ResetTypes {
    longRest = 'long rest',
    shortRest = 'short rest'
}

export enum FeatureSources {
    race = 'race',
    class = 'class',
    background = 'background',
    feat = 'feat',
    other = 'other'
}

export enum CastingTimes {
    action = 'action',
    bonusAction = 'bonus action',
    reaction = 'reaction',
    minute = '1 minute',
    '10minute' = '10 minutes',
    '1hour' = '1 hour',
    '8hour' = '8 hours',
    '12hour' = '12 hours',
    '24hour' = '24 hours'
}

export enum Skills {
    acrobatics = 'acrobatics',
    animalHandling = 'animalHandling',
    arcana = 'arcana',
    athletics = 'athletics',
    deception = 'deception',
    history = 'history',
    insight = 'insight',
    intimidation = 'intimidation',
    investigation = 'investigation',
    medicine = 'medicine',
    nature = 'nature',
    perception = 'perception',
    performance = 'performance',
    persuasion = 'persuasion',
    religion = 'religion',
    sleightOfHand = 'sleightOfHand',
    stealth = 'stealth',
    survival = 'survival',
};

const testSheetData: Models.SheetData = {
    SectionGeneral: {
        name: 'Elandra',
        player: 'Mark',
        species: 'Half-Elf',
        background: 'Noble',
        classes: 'Wizard 5 / Fighter 3',
        characterLevel: 8,
        proficiencyBonus: 3
    },
    SectionAbilities: {
        STR: { name: Abilities['STR'], score: 10, bonus: 0, customModifier: 0 },
        DEX: { name: Abilities['DEX'], score: 14, bonus: 2, customModifier: 0 },
        CON: { name: Abilities['CON'], score: 12, bonus: 1, customModifier: 0 },
        INT: { name: Abilities['INT'], score: 16, bonus: 3, customModifier: 0 },
        WIS: { name: Abilities['WIS'], score: 13, bonus: 1, customModifier: 0 },
        CHA: { name: Abilities['CHA'], score: 11, bonus: 0, customModifier: 0 }
    },
    SectionDefenses: {
        ac: 15,
        immunities: 'Poisoned',
        resistances: 'Fire'
    },
    SectionHealth: {
        hpCurrent: 38,
        hpMax: 38,
        hpTemp: 0,
        conditions: null,
        hitDice: 8
    },
    SectionMain: {
        resources: 'Arcane Recovery (1/day)',
        actions: 'Fire Bolt, Sword Attack',
        spells: 'Fireball, Mage Armor',
        inventory: 'Spellbook, Dagger, Rations',
        features: 'Darkvision, Fey Ancestry',
        spellModifiers: {
            ability: 'INT',
            attack: 5,
            saveDC: 13
        },
        description: 'A cunning half-elf wizard with a noble background.',
        notes: 'Remember to prepare spells after a long rest.'
    },
    SectionProficiencies: {
        weapons: 'Simple Weapons, Longswords',
        armor: 'Light Armor',
        tools: 'Thieves\' Tools',
        languages: 'Common, Elvish, Draconic'
    },
    SectionSavingThrows: {
        STR: { ability: 'STR', proficiency: '', bonus: 0, customModifier: 0 },
        DEX: { ability: 'DEX', proficiency: 'proficient', bonus: 5, customModifier: 0 },
        CON: { ability: 'CON', proficiency: '', bonus: 1, customModifier: 0 },
        INT: { ability: 'INT', proficiency: 'proficient', bonus: 6, customModifier: 0 },
        WIS: { ability: 'WIS', proficiency: 'half-Proficient', bonus: 2, customModifier: 0 },
        CHA: { ability: 'CHA', proficiency: '', bonus: 0, customModifier: 0 }
    },
    SectionSkills: {
        acrobatics: { name: 'acrobatics', ability: 'DEX', proficiency: '', bonus: 2, customModifier: 0 },
        animalHandling: { name: 'animal Handling', ability: 'WIS', proficiency: '', bonus: 1, customModifier: 0 },
        arcana: { name: 'arcana', ability: 'INT', proficiency: 'proficient', bonus: 6, customModifier: 0 },
        athletics: { name: 'athletics', ability: 'STR', proficiency: '', bonus: 0, customModifier: 0 },
        deception: { name: 'deception', ability: 'CHA', proficiency: '', bonus: 0, customModifier: 0 },
        history: { name: 'history', ability: 'INT', proficiency: 'proficient', bonus: 6, customModifier: 0 },
        insight: { name: 'insight', ability: 'WIS', proficiency: '', bonus: 1, customModifier: 0 },
        intimidation: { name: 'intimidation', ability: 'CHA', proficiency: '', bonus: 0, customModifier: 0 },
        investigation: { name: 'investigation', ability: 'INT', proficiency: '', bonus: 3, customModifier: 0 },
        medicine: { name: 'medicine', ability: 'WIS', proficiency: '', bonus: 1, customModifier: 0 },
        nature: { name: 'nature', ability: 'INT', proficiency: '', bonus: 3, customModifier: 0 },
        perception: { name: 'perception', ability: 'WIS', proficiency: 'proficient', bonus: 4, customModifier: 0 },
        performance: { name: 'performance', ability: 'CHA', proficiency: '', bonus: 0, customModifier: 0 },
        persuasion: { name: 'persuasion', ability: 'CHA', proficiency: 'proficient', bonus: 3, customModifier: 0 },
        religion: { name: 'religion', ability: 'INT', proficiency: '', bonus: 3, customModifier: 0 },
        sleightOfHand: { name: 'sleight of Hand', ability: 'DEX', proficiency: '', bonus: 2, customModifier: 0 },
        stealth: { name: 'stealth', ability: 'DEX', proficiency: '', bonus: 2, customModifier: 0 },
        survival: { name: 'survival', ability: 'WIS', proficiency: '', bonus: 1, customModifier: 0 }
    }
};

const testStateData: Models.StateData = {
    sheetUpdated: false,
    abilities: {
        STR: 10,
        DEX: 14,
        CON: 12,
        INT: 16,
        WIS: 13
    },
    form: formBuilder.group(testSheetData) as unknown as Models.SheetFormSections
};

export const testData: Models.StoreData = {
    state: testStateData,
    sheet: testSheetData 
};
