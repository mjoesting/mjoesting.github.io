import { FormControl, FormGroup } from "@angular/forms";

export interface StoreData {
    state: StateData,
    sheet: SheetData
}

export interface StateData {
    isUpdated: false,
    abilities: {[key: string]: number}
    form: SheetForm
}

export interface SectionGeneral {
    name: string | null;
    player: string | null;
    species: string | null;
    background: string | null;
    classes: Class[] | null;
    characterLevel: number | null;
    proficiencyBonus: number | null;
}

export type SectionAbilities = {
    [key: string]: Ability | null;
};

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
    weapons: string[] | null;
    armor: string[] | null;
    tools: string[] | null;
    languages: string[] | null;
}
    
export interface SectionSavingThrows {
    [key: string]: SavingThrow | null;
}
    
export interface SectionSkills {
    skills: Skill[] | null;
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

export type SheetForm = {
    SectionGeneral: DynamicFormGroup<SectionGeneralFormFields>;
    SectionAbilities: DynamicFormGroup<SectionAbilitiesFormFields>;
    SectionDefenses: DynamicFormGroup<SectionDefensesFormFields>;
    SectionHealth: DynamicFormGroup<SectionHealthFormFields>;
    SectionMain: DynamicFormGroup<SectionMainFormFields>;
    SectionProficiencies: DynamicFormGroup<SectionProficienciesFormFields>;
    SectionSavingThrows: DynamicFormGroup<SectionSavingThrowsFormFields>;
    SectionSkills: DynamicFormGroup<SectionSkillsFormFields>;
}

export type DynamicFormGroup<T> = {
    [K in keyof T]: FormGroup<DynamicFormControl<T[K]>>;
}

export type DynamicFormControl<T> = {
    [K in keyof T]: FormControl<T[K]>
}

export type SectionGeneralFormFields = {
    name: FormControl<string | null>;
    player: FormControl<string | null>;
    species: FormControl<string | null>;
    background: FormControl<string | null>;
    classes: DynamicFormGroup<Class>;
    characterLevel: FormControl<number | null>;
    proficiencyBonus: FormControl<number | null>;
}

export type SectionAbilitiesFormFields = {
    [key: string]: DynamicFormGroup<Ability>;
}

export type SectionDefensesFormFields = {
    ac: FormControl<number>;
    immunities?: DynamicFormControl<string>;
    resistances?: DynamicFormControl<string>;
}

export type SectionHealthFormFields = {
    hpCurrent: FormControl<number>;
    hpMax: FormControl<number>;
    hpTemp: FormControl<number>;
    condition?: DynamicFormControl<string>;
}

export type SectionMainFormFields = {
    resources: DynamicFormGroup<Resource>;
    actions: DynamicFormGroup<Action>;
    spellModifiers: FormGroup<{
        ability: FormControl<string>;
        attack: FormControl<number>;
        saveDC: FormControl<number>;
    }>;
    spells: DynamicFormGroup<Spell>;
    inventory: DynamicFormGroup<Item>;
    features: DynamicFormGroup<Feature>;
    description: FormControl<string>;
    notes: FormControl<string>;
}
    
export type SectionProficienciesFormFields = {
    weapons: FormControl<string>;
    armor: FormControl<string>;
    tools: FormControl<string>;
    languages: FormControl<string>;
}
    
export type SectionSavingThrowsFormFields = {
    savingThrows: DynamicFormGroup<SavingThrow>;
}
    
export type SectionSkillsFormFields = {
    skills: DynamicFormGroup<Skill>;
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
    proficiency: string | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
}
    
export interface Skill {
    name: string | null;
    ability: string | null;
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
