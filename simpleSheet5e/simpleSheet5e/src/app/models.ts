export interface sheetData {
    state: state,
    sheet: sheet
}

export interface sheet {
    SectionGeneral: null,
    SectionAbilities: null,
    SectionDefenses: null,
    SectionHealth: null,
    SectionMain: null,
    SectionProficiencies: null,
    SectionSavingThrows: null,
    SectionSkills: null
}

export interface state {
    isUpdated: false,
    abilities: {[key: string]: number | null}
}

export interface SectionGeneral {
    name: string | null;
    player: string | null;
    race: string | null;
    background: string | null;
    classes: Class[] | null;
    characterLevel: number | null;
    proficiencyBonus: number | null;
}

export interface SectionAbilities {
    STR: Ability;
    DEX: Ability;
    CON: Ability;
    INT: Ability;
    WIS: Ability;
    CHA: Ability;
}

export interface SectionDefenses {
    ac: number | null;
    immunities: string[] | null;
    resistances: string[] | null;
}

export interface SectionHealth {
    hpCurrent: number | null;
    hpMax: number | null;
    hpTemp: number | null;
    hitDice: number | null;
    conditions: string[] | null;
}

export interface SectionMain {
    resources: Resource[] | null;
    actions: Action[] | null;
    spellModifiers: SpellModifiers | null;
    spells: Spell[] | null;
    inventory: Item[] | null;
    features: Feature[] | null;
    description: string | null;
    notes: string | null;
}
    
export interface SectionProficiencies {
    weapons: string | null;
    armor: string | null;
    tools: string | null;
    languages: string | null;
}
    
export interface SectionSavingThrows {
    savingThrows: SavingThrow[] | null;
}
    
export interface SectionSkills {
    skills: Skill[] | null;
}
    
export interface Class {
    name: string | null;
    level: number | null;
}
    
export interface Ability {
    ability: string;
    score: number | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
}
    
export interface SavingThrow {
    ability: string | null;
    proficient: string | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
}
    
export interface Skill {
    name: string | null;
    ability: string | null;
    proficient?: string | null;
    bonus?: number | null;
    customBonusModifiedBy?: string | null;
}
    
export interface Action {
    name: string | null;
    actionType: string | null;
    description: string | null;
    resource: string | null
}
    
export interface Item {
    name: string | null;
    cost: number | null;
    weight: number | null;
    damageType: string | null;
    damage: string | null;
    attackAbility: string | null;
    attackBonus: number | null;
    isMagic: boolean;
    magicBonus: number | null;
    customBonusModifiedBy: string | null
}
    
export interface Spell {
    name: string | null;
    level: number | null;
    castingTime: string | null;
    duration: string | null;
    range: string | null;
    damageType: string | null;
    damage: string | null;
    description: string | null
}
    
export interface SpellGroup {
    level: number | null;
    slots: number | null;
}
    
export interface SpellModifiers {
    ability: string | null;
    attack: number | null;
    saveDC: number | null;
}
    
export interface Feature {
    name: string | null;
    description: string | null;
}
    
export interface FeatureGroup {
    fromName: string | null;
    fromType: string | null;
    features: Feature[] | null;
}
    
export interface CharacterDescription {
    alignment: string | null;
    gender: string | null;
    eyes: string | null;
    hair: string | null;
    skin: string | null;
    height: string | null;
    weight: string | null;
    age: string | null;
    faith: string | null
    appearance: string | null;
    flaws: string | null;
    bonds: string | null;
    ideals: string | null;
    personality: string | null;
}
    
export interface Resource {
    resetOn: string | null;
    current: string | null;
    name: string | null;
}
