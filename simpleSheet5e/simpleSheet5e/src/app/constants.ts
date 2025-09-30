import * as Models from './models';
import { FormBuilder, FormGroup } from '@angular/forms';

const formBuilder = new FormBuilder();

export const Sections: {[key: string]: string} = {
    SectionGeneral: 'SectionGeneral',
    SectionAbilities: 'SectionAbilities',
    SectionDefenses: 'SectionDefenses',
    SectionHealth: 'SectionHealth',
    SectionMain: 'SectionMain',
    SectionProficiencies: 'SectionProficiencies',
    SectionSavingThrows: 'SectionSavingThrows',
    SectionSkills: 'SectionSkills'
}

export const Abilities: {[key: string]: string} = {
    STR: 'STR',
    DEX: 'DEX',
    CON: 'CON',
    INT: 'INT',
    WIS: 'WIS',
    CHA: 'CHA'
}

export const Proficiencies: {[key: string]: string} = {
    proficient: 'roficient',
    expertise: 'expertise',
    halfProficient: 'half-Proficient'
}

export const ActionTypes: {[key: string]: string} = {
    action: 'action',
    bonusAction: 'bonus action',
    reaction: 'reaction'
}

export const ResetTypes: {[key: string]: string} = {
    longRest: 'long rest',
    shortRest: 'short rest'
}

export const FeatureSources: {[key: string]: string} = {
    race: 'race',
    class: 'class',
    background: 'background',
    feat: 'feat',
    other: 'other'
}

export const CastingTimes: {[key: string]: string} = {
    action: 'action',
    bonusAction: 'bonus action',
    reaction: 'reaction',
    minute: '1 minute',
    '10minute': '10 minutes',
    '1hour': '1 hour',
    '8hour': '8 hours',
    '12hour': '12 hours',
    '24hour': '24 hours'
}

export const Skills: {[key: string]: Models.Skill} = {
    acrobatics: { name: 'acrobatics', ability: 'DEX' },
    animalHandling: { name: 'animal Handling', ability: 'WIS' },
    arcana: { name: 'arcana', ability: 'INT' },
    athletics: { name: 'athletics', ability: 'STR' },
    deception: { name: 'deception', ability: 'CHA' },
    history: { name: 'history', ability: 'INT' },
    insight: { name: 'insight', ability: 'WIS' },
    intimidation: { name: 'intimidation', ability: 'CHA' },
    investigation: { name: 'investigation', ability: 'INT' },
    medicine: { name: 'medicine', ability: 'WIS' },
    nature: { name: 'nature', ability: 'INT' },
    perception: { name: 'perception', ability: 'WIS' },
    performance: { name: 'performance', ability: 'CHA' },
    persuasion: { name: 'persuasion', ability: 'CHA' },
    religion: { name: 'religion', ability: 'INT' },
    sleightOfHand: { name: 'sleight of Hand', ability: 'DEX' },
    stealth: { name: 'stealth', ability: 'DEX' },
    survival: { name: 'survival', ability: 'WIS' },
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
        STR: { ability: Abilities['STR'], score: 10, bonus: 0, customBonusModifiedBy: null },
        DEX: { ability: Abilities['DEX'], score: 14, bonus: 2, customBonusModifiedBy: null },
        CON: { ability: Abilities['CON'], score: 12, bonus: 1, customBonusModifiedBy: null },
        INT: { ability: Abilities['INT'], score: 16, bonus: 3, customBonusModifiedBy: null },
        WIS: { ability: Abilities['WIS'], score: 13, bonus: 1, customBonusModifiedBy: null },
        CHA: { ability: Abilities['CHA'], score: 11, bonus: 0, customBonusModifiedBy: null }
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
        STR: { ability: 'STR', proficiency: '', bonus: 0, customBonusModifiedBy: null },
        DEX: { ability: 'DEX', proficiency: 'proficient', bonus: 5, customBonusModifiedBy: null },
        CON: { ability: 'CON', proficiency: '', bonus: 1, customBonusModifiedBy: null },
        INT: { ability: 'INT', proficiency: 'proficient', bonus: 6, customBonusModifiedBy: null },
        WIS: { ability: 'WIS', proficiency: 'half-Proficient', bonus: 2, customBonusModifiedBy: null },
        CHA: { ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null }
    },
    SectionSkills: {
        acrobatics: { name: 'acrobatics', ability: 'DEX', proficiency: '', bonus: 2, customBonusModifiedBy: null },
        animalHandling: { name: 'animal Handling', ability: 'WIS', proficiency: '', bonus: 1, customBonusModifiedBy: null },
        arcana: { name: 'arcana', ability: 'INT', proficiency: 'proficient', bonus: 6, customBonusModifiedBy: null },
        athletics: { name: 'athletics', ability: 'STR', proficiency: '', bonus: 0, customBonusModifiedBy: null },
        deception: { name: 'deception', ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null },
        history: { name: 'history', ability: 'INT', proficiency: 'proficient', bonus: 6, customBonusModifiedBy: null },
        insight: { name: 'insight', ability: 'WIS', proficiency: '', bonus: 1, customBonusModifiedBy: null },
        intimidation: { name: 'intimidation', ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null },
        investigation: { name: 'investigation', ability: 'INT', proficiency: '', bonus: 3, customBonusModifiedBy: null },
        medicine: { name: 'medicine', ability: 'WIS', proficiency: '', bonus: 1, customBonusModifiedBy: null },
        nature: { name: 'nature', ability: 'INT', proficiency: '', bonus: 3, customBonusModifiedBy: null },
        perception: { name: 'perception', ability: 'WIS', proficiency: 'proficient', bonus: 4, customBonusModifiedBy: null },
        performance: { name: 'performance', ability: 'CHA', proficiency: '', bonus: 0, customBonusModifiedBy: null },
        persuasion: { name: 'persuasion', ability: 'CHA', proficiency: 'proficient', bonus: 3, customBonusModifiedBy: null },
        religion: { name: 'religion', ability: 'INT', proficiency: '', bonus: 3, customBonusModifiedBy: null },
        sleightOfHand: { name: 'sleight of Hand', ability: 'DEX', proficiency: '', bonus: 2, customBonusModifiedBy: null },
        stealth: { name: 'stealth', ability: 'DEX', proficiency: '', bonus: 2, customBonusModifiedBy: null },
        survival: { name: 'survival', ability: 'WIS', proficiency: '', bonus: 1, customBonusModifiedBy: null }
    }
};

const testStateData: Models.StateData = {
    isUpdated: false,
    abilities: {
        STR: 10,
        DEX: 14,
        CON: 12,
        INT: 16,
        WIS: 13
    },
    form: formBuilder.group(testSheetData) as unknown as FormGroup<Models.SheetFormFields>
};

export const testData: Models.StoreData = {
    state: testStateData,
    sheet: testSheetData 
};
