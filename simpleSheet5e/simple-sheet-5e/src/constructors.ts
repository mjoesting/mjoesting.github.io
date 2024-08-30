
export class SectionGeneral {
    name: string | null;
    player: string | null;
    race: string | null;
    background: string | null;
    classes: Class[] | null;
    characterLevel: number | null;
    proficiencyBonus: number | null;
    constructor(name: string | null, player: string | null, race: string | null, background: string | null, classes: Class[] | null, characterLevel: number | null, proficiencyBonus: number | null) {
        this.name = name; // string
        this.player = player; // string
        this.race = race; // string
        this.background = background; // string
        this.classes = classes; // Array<class>
        this.characterLevel = characterLevel; // number
        this.proficiencyBonus = proficiencyBonus; // number<proficiencyBonus>
    }
}

export class SectionAbilities {
    'STR': Ability;
    'DEX': Ability;
    'CON': Ability;
    'INT': Ability;
    'WIS': Ability;
    'CHA': Ability;
    constructor(abilities: Ability[]) {
        abilities.map(a => this[a.ability as keyof SectionAbilities] = a)
    }
}

export class SectionDefenses {
    ac: number | null;
    immunities: string[] | null;
    resistances: string[] | null;
    constructor(ac: number | null, immunities: string[] | null, resistances: string[] | null) {
        this.ac = ac; // number
        this.immunities = immunities; // Array<string>
        this.resistances = resistances; // Array<string>
    }
}

export class SectionHealth {
    hpCurrent: number | null;
    hpMax: number | null;
    hpTemp: number | null;
    hitDice: number | null;
    conditions: string[] | null;
    constructor(hpCurrent: number | null, hpMax: number | null, hpTemp: number | null, hitDice: number | null, conditions: string[] | null) {
        this.hpCurrent = hpCurrent; // number
        this.hpMax = hpMax; // number
        this.hpTemp = hpTemp; // number
        this.hitDice = hitDice; // number
        this.conditions = conditions; // Array<string>
    }
}

export class SectionMain {
    resources: Resource[] | null;
    actions: Action[] | null;
    spellModifiers: SpellModifiers | null;
    spells: Spell[] | null;
    inventory: Item[] | null;
    features: Feature[] | null;
    description: string | null;
    notes: string | null;
    constructor(resources: Resource[] | null, actions: Action[] | null, spellModifiers: SpellModifiers | null, spells: Spell[] | null, inventory: Item[] | null, features: Feature[] | null, description: string | null, notes: string | null) {
        this.resources = resources; // Array<resource>
        this.actions = actions; // Array<action>
        this.spellModifiers = spellModifiers; // spellModifiers
        this.spells = spells; // Array<spell>
        this.inventory = inventory; // Array<item>
        this.features = features; // Array<feature>
        this.description = description; // string<characterDescription>
        this.notes = notes; // string
    }
}
    
export class SectionProficiencies {
    weapons: string | null;
    armor: string | null;
    tools: string | null;
    languages: string | null;
    constructor(weapons: string | null, armor: string | null, tools: string | null, languages: string | null) {
        this.weapons = weapons; // string
        this.armor = armor; // string
        this.tools = tools; // string
        this.languages = languages; // string
    }
}
    
export class SectionSavingThrows {
    savingThrows: SavingThrow[] | null;
    constructor(savingThrows: SavingThrow[] | null) {
        this.savingThrows = savingThrows; // Array<savingThrow>
    }
}
    
export class SectionSkills {
    skills: Skill[] | null;
    constructor(skills: Skill[] | null) {
        this.skills = skills; // Array<skill>
    }
}
    
export class Class {
    name: string | null;
    level: number | null;
    constructor(name: string | null, level: number | null) {
        this.name = name; // string
        this.level = level; // number
    }
}
    
export class Ability {
    ability: string;
    score: number | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
    constructor(ability: string, score: number | null, bonus: number | null, customBonusModifiedBy: string | null) {
        this.ability = ability; // string
        this.score = score; // number
        this.bonus = bonus; // number
        this.customBonusModifiedBy = customBonusModifiedBy; // string
    }
}
    
export class SavingThrow {
    ability: string | null;
    proficient: string | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
    constructor(ability: string | null, proficient: string | null, bonus: number | null, customBonusModifiedBy: string | null) {
        this.ability = ability; // string
        this.proficient = proficient; // string
        this.bonus = bonus; // string
        this.customBonusModifiedBy = customBonusModifiedBy; // string
    }
}
    
export class Skill {
    name: string | null;
    ability: string | null;
    proficient: string | null;
    bonus: number | null;
    customBonusModifiedBy: string | null;
    constructor(name: string | null, ability: string | null, proficient: string | null, bonus: number | null, customBonusModifiedBy: string | null) {
        this.name = name; // string
        this.ability = ability; // string
        this.proficient = proficient; // string<proficiencies>
        this.bonus = bonus; // number
        this.customBonusModifiedBy = customBonusModifiedBy; // string
    }
}
    
export class Action {
    name: string | null;
    actionType: string | null;
    description: string | null;
    resource: string | null
    constructor(name: string | null, actionType: string | null, description: string | null, resource: string | null) {
        this.name = name; // string
        this.actionType = actionType; // string
        this.description = description; // string
        this.resource = resource; // string
    }
}
    
export class Item {
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
    constructor(name: string | null, cost: number | null, weight: number | null, damageType: string | null, damage: string | null, attackAbility: string | null, attackBonus: number | null, isMagic: boolean, magicBonus: number | null, customBonusModifiedBy: string | null) {
        this.name = name; // string
        this.cost = cost; // number
        this.weight = weight; // number
        this.damageType = damageType; // string
        this.damage = damage; // string
        this.attackAbility = attackAbility; // string
        this.attackBonus = attackBonus; // number
        this.isMagic = isMagic; // boolean
        this.magicBonus = magicBonus; // number
        this.customBonusModifiedBy = customBonusModifiedBy; // string
    }
}
    
export class Spell {
    name: string | null;
    level: number | null;
    castingTime: string | null;
    duration: string | null;
    range: string | null;
    damageType: string | null;
    damage: string | null;
    description: string | null
    constructor(name: string | null, level: number | null, castingTime: string | null, duration: string | null, range: string | null, damageType: string | null, damage: string | null, description: string | null) {
        this.name = name; // string
        this.level = level; // number
        this.castingTime = castingTime; // string
        this.duration = duration; // string
        this.range = range; // string
        this.damageType = damageType; // string
        this.damage = damage; // string
        this.description = description; // string
    }
}
    
export class SpellGroup {
    level: number | null;
    slots: number | null;
    constructor(level: number | null, slots: number | null) {
        this.level = level; // number
        this.slots = slots; // number
    }
}
    
export class SpellModifiers {
    ability: string | null;
    attack: number | null;
    saveDC: number | null;
    constructor(ability: string | null, attack: number | null, saveDC: number | null) {
        this.ability = ability; // string<abilities>
        this.attack = attack; // number
        this.saveDC = saveDC; // number
    }
}
    
export class Feature {
    name: string | null;
    description: string | null;
    constructor(name: string | null, description: string | null) {
        this.name = name; // string
        this.description = description; // string
    }
}
    
export class FeatureGroup {
    fromName: string | null;
    fromType: string | null;
    features: Feature[] | null;
    constructor(fromName: string | null, fromType: string | null, features: Feature[] | null) {
        this.fromName = fromName; // string
        this.fromType = fromType; // string<featureSources>
        this.features = features // Array<Feature>
    }
}
    
export class CharacterDescription {
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
    constructor(alignment: string | null, gender: string | null, eyes: string | null, hair: string | null, skin: string | null, height: string | null, weight: string | null, age: string | null, faith: string | null, personality: string | null, ideals: string | null, bonds: string | null, flaws: string | null, appearance: string | null) {
        this.alignment = alignment; // string
        this.gender = gender; // string
        this.eyes = eyes; // string
        this.hair = hair; // string
        this.skin = skin; // string
        this.height = height; // string
        this.weight = weight; // string
        this.age = age; // string
        this.faith = faith; // string
        this.personality = personality; // string
        this.ideals = ideals; // string
        this.bonds = bonds; // string
        this.flaws = flaws; // string
        this.appearance = appearance; // string
    }
}
    
export class Resource {
    resetOn: string | null;
    current: string | null;
    name: string | null;
    constructor(name: string | null, current: string | null, resetOn: string | null) {
        this.name = name; // string
        this.current = current; // number
        this.resetOn = resetOn; // string<resetTypes>
    }
}
