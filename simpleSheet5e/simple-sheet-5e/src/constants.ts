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
    proficient: 'Proficient',
    expertise: 'Expertise',
    halfProficient: 'Half-Proficient'
}

export const ActionTypes: {[key: string]: string} = {
    action: 'Action',
    bonusAction: 'Bonus Action',
    reaction: 'Reaction'
}

export const ResetTypes: {[key: string]: string} = {
    longRest: 'Long Rest',
    shortRest: 'Short Rest'
}

export const FeatureSources: {[key: string]: string} = {
    race: 'Race',
    class: 'Class',
    background: 'Background',
    feat: 'Feat',
    other: 'Other'
}

export const CastingTimes: {[key: string]: string} = {
    action: 'Action',
    bonusAction: 'Bonus Action',
    reaction: 'Reaction',
    minute: '1 minute',
    '10minute': '10 minutes',
    '1hour': '1 hour',
    '8hour': '8 hours',
    '12hour': '12 hours',
    '24hour': '24 hours'
}

export const Skills: {[key: string]: string}[] = [
    { name: 'Acrobatics', ability: 'DEX' },
    { name: 'Animal Handling', ability: 'WIS' },
    { name: 'Arcana', ability: 'INT' },
    { name: 'Athletics', ability: 'STR' },
    { name: 'Deception', ability: 'CHA' },
    { name: 'History', ability: 'INT' },
    { name: 'Insight', ability: 'WIS' },
    { name: 'Intimidation', ability: 'CHA' },
    { name: 'Investigation', ability: 'INT' },
    { name: 'Medicine', ability: 'WIS' },
    { name: 'Nature', ability: 'INT' },
    { name: 'Perception', ability: 'WIS' },
    { name: 'Performance', ability: 'CHA' },
    { name: 'Persuasion', ability: 'CHA' },
    { name: 'Religion', ability: 'INT' },
    { name: 'Sleight of Hand', ability: 'DEX' },
    { name: 'Stealth', ability: 'DEX' },
    { name: 'Survival', ability: 'WIS' },
];
