import { FormControl, FormGroup } from "@angular/forms";

export interface StoreData {
    state: StateData,
    sheet: SheetData
}

export interface StateData {
    isUpdated: boolean,
    abilities: {[key: string]: number}
    form: FormGroup<SheetFormFields>
}

export interface SectionGeneral {
    name: string | null;
    player: string | null;
    species: string | null;
    background: string | null;
    classes: string | null;
    // classes: Class[] | null;  TODO: Support dynamic rows
    characterLevel: number | null;
    proficiencyBonus: number | null;
}

export type SectionAbilities = {
    [key: string]: Ability | null;
};

export interface SectionDefenses {
    ac: number | null;
    immunities: string | null;
    resistances: string | null;
    // immunities: string[] | null; TODO: Support dynamic rows
    // resistances: string[] | null;
}

export interface SectionHealth {
    hpCurrent: number | null;
    hpMax: number | null;
    hpTemp: number | null;
    hitDice: number | null;
    conditions: string | null;
}

export interface SectionMain {
    // resources: Resource[] | null;
    // actions: Action[] | null;
    // spells: Spell[] | null;
    // inventory: Item[] | null;
    // features: Feature[] | null;
    resources: string | null;
    actions: string | null;
    spells: string | null;
    inventory: string | null;
    features: string | null;
    spellModifiers: SpellModifiers | null;
    description: string | null;
    notes: string | null;
}
    
export interface SectionProficiencies {
    // weapons: string[] | null;
    // armor: string[] | null;
    // tools: string[] | null;
    // languages: string[] | null;
    weapons: string | null;
    armor: string | null;
    tools: string | null;
    languages: string | null;
}
    
export interface SectionSavingThrows {
    [key: string]: SavingThrow | null;
}
    
export interface SectionSkills {
    acrobatics: Skill,
    animalHandling: Skill,
    arcana: Skill,
    athletics: Skill,
    deception: Skill,
    history: Skill,
    insight: Skill,
    intimidation: Skill,
    investigation: Skill,
    medicine: Skill,
    nature: Skill,
    perception: Skill,
    performance: Skill,
    persuasion: Skill,
    religion: Skill,
    sleightOfHand: Skill,
    stealth: Skill,
    survival: Skill
}

export interface SheetData {
    SectionGeneral: SectionGeneral,
    SectionAbilities: SectionAbilities,
    SectionDefenses: SectionDefenses,
    SectionHealth: SectionHealth,
    SectionMain: SectionMain,
    SectionProficiencies: SectionProficiencies,
    SectionSavingThrows: SectionSavingThrows,
    SectionSkills: SectionSkills
}

export type SheetFormFields = {
    SectionGeneral: FormGroup<SectionGeneralFormFields>;
    SectionAbilities: FormGroup<SectionAbilitiesFormFields>;
    SectionDefenses: FormGroup<SectionDefensesFormFields>;
    SectionHealth: FormGroup<SectionHealthFormFields>;
    SectionMain: FormGroup<SectionMainFormFields>;
    SectionProficiencies: FormGroup<SectionProficienciesFormFields>;
    SectionSavingThrows: FormGroup<SectionSavingThrowsFormFields>;
    SectionSkills: FormGroup<SectionSkillsFormFields>;
}

export type SectionGeneralFormFields = {
    name: FormControl<string | null>;
    player: FormControl<string | null>;
    species: FormControl<string | null>;
    background: FormControl<string | null>;
    classes: FormControl<string | null>;
    characterLevel: FormControl<number | null>;
    proficiencyBonus: FormControl<number | null>;
}

export type ClassFormGroup = {
    name: FormControl<string | null>;
    level: FormControl<number | null>;
}

export type SectionAbilitiesFormFields = {
    STR: FormGroup<AbilityFormGroup>,
    DEX: FormGroup<AbilityFormGroup>,
    CON: FormGroup<AbilityFormGroup>,
    INT: FormGroup<AbilityFormGroup>,
    WIS: FormGroup<AbilityFormGroup>,
    CHA: FormGroup<AbilityFormGroup>
}

export type AbilityFormGroup = {
    name: FormControl<string | null>;
    score: FormControl<number | null>;
    bonus: FormControl<number | null>;
    customBonusModifiedBy: FormControl<string | null>;
}

export type SectionDefensesFormFields = {
    ac: FormControl<number | null>;
    immunities?: FormControl<string | null>;
    resistances?: FormControl<string | null>;
}

export type SectionHealthFormFields = {
    hpCurrent: FormControl<number | null>;
    hpMax: FormControl<number | null>;
    hpTemp: FormControl<number | null>;
    conditions?: FormControl<string | null>;
}

export type SectionMainFormFields = {
    resources: FormControl<string | null>;
    actions: FormControl<string | null>;
    // spellModifiers: FormGroup<{
    //     ability: FormControl<string>;
    //     attack: FormControl<number>;
    //     saveDC: FormControl<number>;
    // }>;
    spells: FormControl<string | null>;
    inventory: FormControl<string | null>;
    features: FormControl<string | null>;
    description: FormControl<string>;
    notes: FormControl<string>;
}

export type ActionFormGroup = {
    name: FormControl<string | null>;
    actionType: FormControl<string | null>;
    description: FormControl<string | null>;
    resource: FormControl<string | null>
}

export type InventoryFormGroup = {
    name: FormControl<string | null>;
    description: FormControl<string | null>;
    quantity: FormControl<number | null>;
    cost: FormControl<number | null>;
    weight: FormControl<number | null>;
    damageType: FormControl<string | null>;
    damage: FormControl<string | null>;
    attackAbility: FormControl<string | null>;
    attackBonus: FormControl<number | null>;
    isMagic: FormControl<boolean | null>;
    magicBonus: FormControl<number | null>;
    customBonusModifiedBy: FormControl<string | null>,
    notes: FormControl<string | null>;
}

export type FeatureFormGroup = {
    name: FormControl<string | null>;
    description: FormControl<string | null>;
}

export type SpellFormGroup = {
    name: FormControl<string | null>;
    level: FormControl<number | null>;
    castingTime: FormControl<string | null>;
    duration: FormControl<string | null>;
    range: FormControl<string | null>;
    damageType: FormControl<string | null>;
    damage: FormControl<string | null>;
    description: FormControl<string | null>
}

export type ResourceFormGroup = {
    resetOn: FormControl<string | null>;
    current: FormControl<string | null>;
    name: FormControl<string | null>;
}
    
export type SectionProficienciesFormFields = {
    weapons: FormControl<string | null>;
    armor: FormControl<string | null>;
    tools: FormControl<string | null>;
    languages: FormControl<string | null>;
}
    
export type SectionSavingThrowsFormFields = {
    STR: FormGroup<SavingThrowFormGroup>;
    DEX: FormGroup<SavingThrowFormGroup>;
    CON: FormGroup<SavingThrowFormGroup>;
    INT: FormGroup<SavingThrowFormGroup>;
    WIS: FormGroup<SavingThrowFormGroup>;
    CHA: FormGroup<SavingThrowFormGroup>;
}

export type SavingThrowFormGroup = {
    ability: FormControl<string | null>;
    proficiency: FormControl<string | null>;
    bonus: FormControl<number | null>;
    customBonusModifiedBy: FormControl<string | null>;
}
    
export type SectionSkillsFormFields = {
    acrobatics: FormGroup<SkillFormGroup>,
    animalHandling: FormGroup<SkillFormGroup>,
    arcana: FormGroup<SkillFormGroup>,
    athletics: FormGroup<SkillFormGroup>,
    deception: FormGroup<SkillFormGroup>,
    history: FormGroup<SkillFormGroup>,
    insight: FormGroup<SkillFormGroup>,
    intimidation: FormGroup<SkillFormGroup>,
    investigation: FormGroup<SkillFormGroup>,
    medicine: FormGroup<SkillFormGroup>,
    nature: FormGroup<SkillFormGroup>,
    perception: FormGroup<SkillFormGroup>,
    performance: FormGroup<SkillFormGroup>,
    persuasion: FormGroup<SkillFormGroup>,
    religion: FormGroup<SkillFormGroup>,
    sleightOfHand: FormGroup<SkillFormGroup>,
    stealth: FormGroup<SkillFormGroup>,
    survival: FormGroup<SkillFormGroup>
}

export type SkillFormGroup = {
    name: FormControl<string>;
    ability: FormControl<string>;
    proficiency: FormControl<string | null | undefined>;
    bonus: FormControl<number | null | undefined>;
    customBonusModifiedBy: FormControl<string | null>;
}
    
export interface Class {
    name: string | null;
    level: number | null;
}
    
export interface Ability {
    name: string;
    score: number | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
}
    
export interface SavingThrow {
    ability: string | null;
    proficiency: string | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
}
    
export interface Skill {
    name: string;
    ability: string;
    proficiency?: string | null;
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
    description: string | null;
    quantity: number | null;
    cost: number | null;
    weight: number | null;
    damageType: string | null;
    damage: string | null;
    attackAbility: string | null;
    attackBonus: number | null;
    isMagic: boolean | null;
    magicBonus: number | null;
    customBonusModifiedBy: string | null,
    notes: string | null;
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
