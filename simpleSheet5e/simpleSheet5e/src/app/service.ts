import { FormControl, FormGroup } from '@angular/forms';
import * as Constants from './constants';
import { Ability, Action, Class, DynamicFormGroup, Feature, Item, Resource, SavingThrow, SectionAbilities, SectionAbilitiesFormFields, SectionDefensesFormFields, SectionGeneralFormFields, SectionHealthFormFields, SectionMainFormFields, SectionProficienciesFormFields, SectionSavingThrows, SectionSavingThrowsFormFields, SectionSkillsFormFields, SheetData, SheetForm, Skill, Spell, StoreData } from './models';

export class Service {
    store!: StoreData;

    initData(): StoreData {
        let newData: StoreData;
        if (!localStorage.getItem('simpleSheet')) {
            newData = this.initNewData();
            localStorage.setItem('simpleSheet', JSON.stringify(newData));
        } else {
            newData = this.dataFromStorage();
        }
        this.store = newData;
        console.log('Service: newData: ', newData);
        console.log('Service: this.store: ', this.store);
        return newData;
    }

    initNewData(): StoreData {
        const newData: StoreData = {
            state: {
                isUpdated: false,
                abilities: {},
                form: {
                    SectionGeneral: new FormGroup({}) as unknown as DynamicFormGroup<SectionGeneralFormFields>,
                    SectionAbilities: new FormGroup({}) as unknown as DynamicFormGroup<SectionAbilitiesFormFields>,
                    SectionDefenses: new FormGroup({}) as unknown as DynamicFormGroup<SectionDefensesFormFields>,
                    SectionHealth: new FormGroup({}) as unknown as DynamicFormGroup<SectionHealthFormFields>,
                    SectionMain: new FormGroup({}) as unknown as DynamicFormGroup<SectionMainFormFields>,
                    SectionProficiencies: new FormGroup({}) as unknown as DynamicFormGroup<SectionProficienciesFormFields>,
                    SectionSavingThrows: new FormGroup({}) as unknown as DynamicFormGroup<SectionSavingThrowsFormFields>,
                    SectionSkills: new FormGroup({}) as unknown as DynamicFormGroup<SectionSkillsFormFields>
                } as SheetForm
            },
            sheet: {
                SectionGeneral: {
                    name: null,
                    player: null,
                    species: null,
                    background: null,
                    classes: [],
                    characterLevel: null,
                    proficiencyBonus: 2
                },
                SectionAbilities: {},
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
                    resources: [],
                    actions: [],
                    spellModifiers: {
                        ability: 'INT',
                        attack: 0,
                        saveDC: 0
                    },
                    spells: [],
                    inventory: [],
                    features: [],
                    description: null,
                    notes: null
                },
                SectionProficiencies: {
                    weapons: [],
                    armor: [],
                    tools: [],
                    languages: []
                },
                SectionSavingThrows: {},
                SectionSkills: {
                    skills: []
                }
            }
        };
        // init abilities in state
        Object.keys(Constants.Abilities).map((ability: string) => newData.state.abilities[ability] = 10);
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
            score: 10,
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
        Object.keys(Constants.Abilities).map((ability: string) => newData.sheet.SectionSavingThrows![ability] = {
            ability: ability,
            proficient: null,
            bonus: this.getDefaultAbilityModifier(10),
            customBonusModifiedBy: null
        } as unknown as SavingThrow)
        // init Skills section
        Constants.Skills.map(skill => newData.sheet.SectionSkills?.skills?.push(skill));

        return newData;
    }

    saveToStorage(dataToSave: StoreData) {
        if (dataToSave) {
            const mappedData = this.mapStoreDataToFormData(dataToSave);
            localStorage.setItem('simpleSheet', JSON.stringify(mappedData));
        }
    }

    dataFromStorage(): StoreData {
        console.log('loadFromStorage(): ', JSON.parse(localStorage.getItem('simpleSheet')!));
        return JSON.parse(localStorage.getItem('simpleSheet')!);
    }

    mapFormDataToStoreData(formData: SheetData): StoreData {
        const newStoreData: StoreData = {
            state: {
                isUpdated: false,
                abilities: (() => {
                    let abilities: {[key: string]: number} = {};
                    Object.keys(Constants.Abilities)!.forEach((abilityKey: string) => {
                        abilities[abilityKey] = formData.SectionAbilities![abilityKey]!.score !== null ? Number(formData.SectionAbilities![abilityKey]!.score) : 0;
                    });
                    return abilities;
                }) as unknown as {[key: string]: number},
                form: formData as unknown as SheetForm
            },
            sheet: {
                SectionGeneral: {
                    name: formData.SectionGeneral!.name,
                    player: formData.SectionGeneral!.player,
                    species: formData.SectionGeneral!.species,
                    background: formData.SectionGeneral!.background,
                    classes: (() => {
                        let classesArray: Class[] = [];
                        formData.SectionGeneral!.classes!.forEach((classItem: Class) => {
                            classesArray.push({
                                name: classItem.name,
                                level: classItem.level !== null ? Number(classItem.level) : null
                            } as Class);
                        })
                        return classesArray;
                    }) as unknown as Class[],
                    characterLevel: formData.SectionGeneral!.characterLevel,
                    proficiencyBonus: formData.SectionGeneral!.proficiencyBonus
                },
                SectionAbilities: (() => {
                    let abilities: {[key: string]: Ability | null} = {};
                    if (formData.SectionAbilities) {
                        Object.keys(formData.SectionAbilities)!.forEach((abilityKey: string) => {
                            const ability = formData.SectionAbilities![abilityKey];
                            abilities[abilityKey] = {
                                ability: ability!.ability,
                                score: ability!.score !== null ? Number(ability!.score) : null,
                                bonus: ability!.bonus !== null ? Number(ability!.bonus) : null,
                                customBonusModifiedBy: ability!.customBonusModifiedBy ?? null
                            } as Ability;
                        })
                    }
                    return abilities;
                }) as unknown as SectionAbilities,
                SectionDefenses: {
                    ac: formData.SectionDefenses!.ac,
                    immunities: formData.SectionDefenses!.immunities,
                    resistances: formData.SectionDefenses!.resistances
                },
                SectionHealth: {
                    hpCurrent: formData.SectionHealth!.hpCurrent,
                    hpMax: formData.SectionHealth!.hpMax,
                    hpTemp: formData.SectionHealth!.hpTemp,
                    hitDice: formData.SectionHealth!.hitDice,
                    conditions: formData.SectionHealth!.conditions
                },
                SectionMain: {
                    resources: (() => {
                        let resourcesArray: Resource[] = [];
                        formData.SectionMain!.resources!.forEach((resource: Resource) => {
                            resourcesArray.push({
                                name: resource.name,
                                current: resource.current !== null ? Number(resource.current) : null,
                                resetOn: resource.resetOn
                            } as Resource);
                        })
                        return resourcesArray as Resource[];
                    }) as unknown as Resource[],
                    actions: (() => {
                        let actionsArray: Action[] = [];
                        formData.SectionMain!.actions!.forEach((action: Action) => {
                            actionsArray.push({
                                name: action.name,
                                actionType: action.actionType,
                                description: action.description,
                                resource: action.resource
                            } as Action);
                        })
                        return actionsArray as Action[];
                    }) as unknown as Action[],
                    spellModifiers: {
                        ability: formData.SectionMain!.spellModifiers!.ability,
                        attack: formData.SectionMain!.spellModifiers!.attack,
                        saveDC: formData.SectionMain!.spellModifiers!.saveDC
                    },
                    spells: (() => {
                        let spellsArray: Spell[] = [];
                        formData.SectionMain!.spells!.forEach((spell: Spell) => {
                            spellsArray.push({
                                name: spell.name,
                                level: spell.level !== null ? Number(spell.level) : null,
                                castingTime: spell.castingTime,
                                range: spell.range,
                                duration: spell.duration,
                                damageType: spell.damageType,
                                damage: spell.damage,
                                description: spell.description
                            } as Spell);
                        })
                        return spellsArray as Spell[];
                    }) as unknown as Spell[],
                    inventory: (() => {
                        let inventoryArray: Item[] = [];
                        formData.SectionMain!.inventory!.forEach((item: Item) => {
                            inventoryArray.push({
                                name: item.name,
                                description: item.description,
                                cost: item.cost !== null ? Number(item.cost) : null,
                                quantity: item.quantity !== null ? Number(item.quantity) : null,
                                weight: item.weight !== null ? Number(item.weight) : null,
                                damageType: item.damageType,
                                damage: item.damage,
                                attackAbility: item.attackAbility,
                                attackBonus: item.attackBonus !== null ? Number(item.attackBonus) : null,
                                isMagic: item.isMagic !== null ? Boolean(item.isMagic) : null,
                                magicBonus: item.magicBonus !== null ? Number(item.magicBonus) : null,
                                customBonusModifiedBy: item.customBonusModifiedBy ?? null,
                                notes: item.notes ?? null
                            } as Item);
                        })
                        return inventoryArray as Item[];
                    }) as unknown as Item[],
                    features: formData.SectionMain!.features,
                    description: formData.SectionMain!.description,
                    notes: formData.SectionMain!.notes
                },
                SectionProficiencies: {
                    weapons: (() => {
                        let weaponsArray: string[] = [];
                        formData.SectionProficiencies!.weapons!.forEach((weapon: string) => {
                            weaponsArray.push(weapon);
                        })
                        return weaponsArray as string[];
                    }) as unknown as string[],
                    armor: (() => {
                        let armorArray: string[] = [];
                        formData.SectionProficiencies!.armor!.forEach((armor: string) => {
                            armorArray.push(armor);
                        })
                        return armorArray as string[];
                    }) as unknown as string[],
                    tools: (() => {
                        let toolsArray: string[] = [];
                        formData.SectionProficiencies!.tools!.forEach((tool: string) => {
                            toolsArray.push(tool);
                        })
                        return toolsArray as string[];
                    }) as unknown as string[],
                    languages: ((formData: SheetData) => {
                        let languagesArray: string[] = [];
                        formData.SectionProficiencies!.languages!.forEach((language: string) => {
                            languagesArray.push(language);
                        });
                        return languagesArray as string[];
                    }) as unknown as string[]
                },
                SectionSavingThrows: (() => {
                    let savingThrows: {[key: string]: SavingThrow | null} = {};
                    if (formData.SectionSavingThrows) {
                        Object.keys(formData.SectionSavingThrows)!.map((abilityKey: string) => {
                            const savingThrow = formData.SectionSavingThrows![abilityKey];
                            savingThrows[abilityKey] = {
                                ability: savingThrow!.ability,
                                proficiency: savingThrow!.proficiency,
                                bonus: savingThrow!.bonus !== null ? Number(savingThrow!.bonus) : null,
                                customBonusModifiedBy: savingThrow!.customBonusModifiedBy ?? null
                            } as SavingThrow;
                        })
                    }
                    return savingThrows;
                }) as unknown as SectionSavingThrows,
                SectionSkills: {
                    skills: ((formData: SheetData) => {
                        let skillsArray: Skill[] = [];
                        if (formData.SectionSkills && formData.SectionSkills.skills) {
                            formData.SectionSkills.skills.forEach((skill: Skill) => {
                                skillsArray.push({
                                    name: skill.name,
                                    ability: skill.ability,
                                    proficiency: skill.proficiency,
                                    bonus: skill.bonus,
                                    customBonusModifiedBy: skill.customBonusModifiedBy ?? null
                                } as Skill);
                            });
                        }
                        return skillsArray as Skill[];
                    }) as unknown as Skill[]
                }
            }
        }
        return newStoreData;
    }

    mapStoreDataToFormData(storeData: StoreData): SheetForm {
        const newSheetForm: SheetForm = {
            SectionGeneral: new FormGroup({
                name: new FormControl(storeData.sheet.SectionGeneral!.name),
                player: new FormControl(storeData.sheet.SectionGeneral!.player),
                species: new FormControl(storeData.sheet.SectionGeneral!.species),
                background: new FormControl(storeData.sheet.SectionGeneral!.background),
                classes: (() => {
                    let classesFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                    type ClassFormGroupType = { name: FormControl<string | null>; level: FormControl<number | null>; };
                    storeData.sheet.SectionGeneral!.classes!.forEach((classItem: Class) => {
                        const classFormGroup: FormGroup<ClassFormGroupType> = new FormGroup<ClassFormGroupType>({
                            name: new FormControl(classItem.name),
                            level: new FormControl(classItem.level)
                        });
                        classesFormGroup.addControl(classItem.name!, classFormGroup);
                    });
                    return classesFormGroup;
                })(),
                characterLevel: new FormControl(storeData.sheet.SectionGeneral!.characterLevel),
                proficiencyBonus: new FormControl(storeData.sheet.SectionGeneral!.proficiencyBonus)
            }) as unknown as DynamicFormGroup<SectionGeneralFormFields>,
            SectionAbilities: (() => {
                let abilitiesFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                type AbilityFormGroupType = { ability: FormControl<string | null>; score: FormControl<number | null>; bonus: FormControl<number | null>; customBonusModifiedBy: FormControl<string | null>; };
                Object.keys(Constants.Abilities).map((abilityKey: string) => {
                    const abilityItem: Ability = storeData.sheet.SectionAbilities![abilityKey]!;
                    const abilityFormGroup: FormGroup<AbilityFormGroupType> = new FormGroup<AbilityFormGroupType>({
                        ability: new FormControl(abilityItem.ability),
                        score: new FormControl(abilityItem.score),
                        bonus: new FormControl(abilityItem.bonus),
                        customBonusModifiedBy: new FormControl(abilityItem.customBonusModifiedBy)
                    });
                    abilitiesFormGroup.addControl(abilityKey, abilityFormGroup);
                });
                return abilitiesFormGroup;
            }) as unknown as DynamicFormGroup<SectionAbilitiesFormFields>,
            SectionDefenses: (() => {
                type DefensesFormGroupType = { ac: FormControl<number | null>; immunities: FormGroup<{[key: string]: FormControl<string | null>}>; resistances: FormGroup<{[key: string]: FormControl<string | null>}>; };
                return new FormGroup<DefensesFormGroupType>({
                    ac: new FormControl(storeData.sheet.SectionDefenses!.ac),
                    immunities: (() => {
                        let immunitiesFormGroup: FormGroup<{[key: string]: FormControl<string | null>}> = new FormGroup<{[key: string]: FormControl<string | null>}>({});
                        storeData.sheet.SectionDefenses!.immunities?.forEach((immunity: string) => {
                            immunitiesFormGroup.addControl(immunity, new FormControl(immunity));
                        });
                        return immunitiesFormGroup;
                    })(),
                    resistances: (() => {
                        let resistancesFormGroup: FormGroup<{[key: string]: FormControl<string | null>}> = new FormGroup<{[key: string]: FormControl<string | null>}>({});
                        storeData.sheet.SectionDefenses!.resistances?.forEach((resistance: string) => {
                            resistancesFormGroup.addControl(resistance, new FormControl(resistance));
                        });
                        return resistancesFormGroup;
                    })()
                });
            }) as unknown as DynamicFormGroup<SectionDefensesFormFields>,
            SectionHealth: {
                hpCurrent: FormControl<number>,
                hpMax: FormControl<number>,
                hpTemp: FormControl<number>,
                condition: (() => {
                    let conditionsFormGroup: FormGroup<{[key: string]: FormControl<string | null>}> = new FormGroup<{[key: string]: FormControl<string | null>}>({});
                    storeData.sheet.SectionHealth!.conditions?.forEach((condition: string) => {
                        conditionsFormGroup.addControl(condition, new FormControl(condition));
                    });
                    return conditionsFormGroup;
                })
            } as unknown as DynamicFormGroup<SectionHealthFormFields>,
            SectionMain: {
                resources: (() => {
                    let resourcesFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                    type ResourceFormGroupType = { name: FormControl<string | null>; current: FormControl<number | null>; resetOn: FormControl<string | null>; };
                    storeData.sheet.SectionMain!.resources?.forEach((resourceItem: Resource) => {
                        const resourceFormGroup: FormGroup<ResourceFormGroupType> = new FormGroup<ResourceFormGroupType>({
                            name: new FormControl(resourceItem.name),
                            current: new FormControl(resourceItem.current !== null ? Number(resourceItem.current) : null),
                            resetOn: new FormControl(resourceItem.resetOn),
                        });
                        resourcesFormGroup.addControl(resourceItem.name!, resourceFormGroup);
                    });
                    return resourcesFormGroup;
                }),
                actions: (() => {
                    let actionsFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                    type ActionFormGroupType = { name: FormControl<string | null>; actionType: FormControl<string | null>; description: FormControl<string | null>; resource: FormControl<string | null>; };
                    storeData.sheet.SectionMain!.actions?.forEach((actionItem: Action) => {
                        const actionFormGroup: FormGroup<ActionFormGroupType> = new FormGroup<ActionFormGroupType>({
                            name: new FormControl(actionItem.name),
                            actionType: new FormControl(actionItem.actionType),
                            description: new FormControl(actionItem.description),
                            resource: new FormControl(actionItem.resource)
                        });
                        actionsFormGroup.addControl(actionItem.name!, actionFormGroup);
                    });
                    return actionsFormGroup;
                }),
                spellModifiers: FormGroup<{
                    ability: FormControl<string>;
                    attack: FormControl<number>;
                    saveDC: FormControl<number>;
                }>,
                spells: (() => {
                    let spellsFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                    type SpellFormGroupType = { name: FormControl<string | null>; level: FormControl<number | null>; castingTime: FormControl<string | null>; range: FormControl<string | null>; duration: FormControl<string | null>; damageType: FormControl<string | null>; damage: FormControl<string | null>; description: FormControl<string | null>; };
                    storeData.sheet.SectionMain!.spells?.forEach((spellItem: Spell) => {
                        const spellFormGroup: FormGroup<SpellFormGroupType> = new FormGroup<SpellFormGroupType>({
                            name: new FormControl(spellItem.name),
                            level: new FormControl(spellItem.level),
                            castingTime: new FormControl(spellItem.castingTime),
                            duration: new FormControl(spellItem.duration),
                            range: new FormControl(spellItem.range),
                            damageType: new FormControl(spellItem.damageType),
                            damage: new FormControl(spellItem.damage),
                            description: new FormControl(spellItem.description)
                        });
                        spellsFormGroup.addControl(spellItem.name!, spellFormGroup);
                    });
                    return spellsFormGroup;
                })(),
                inventory: (() => {
                    let inventoryFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                    type ItemFormGroupType = { name: FormControl<string | null>; cost: FormControl<number | null>; quantity: FormControl<number | null>; weight: FormControl<number | null>; description: FormControl<string | null>; damageType: FormControl<string | null>; damage: FormControl<string | null>; attackAbility: FormControl<string | null>; attackBonus: FormControl<number | null>; isMagic: FormControl<boolean | null>; magicBonus: FormControl<number | null>; customBonusModifiedBy: FormControl<string | null>; notes: FormControl<string | null>; };
                    storeData.sheet.SectionMain!.inventory?.forEach((item: Item) => {
                        const itemFormGroup: FormGroup<ItemFormGroupType> = new FormGroup<ItemFormGroupType>({
                            name: new FormControl(item.name),
                            description: new FormControl(item.description),
                            cost: new FormControl(item.cost),
                            quantity: new FormControl(item.quantity),
                            weight: new FormControl(item.weight),
                            damageType: new FormControl(item.damageType),
                            damage: new FormControl(item.damage),
                            attackAbility: new FormControl(item.attackAbility),
                            attackBonus: new FormControl(item.attackBonus),
                            isMagic: new FormControl(item.isMagic),
                            magicBonus: new FormControl(item.magicBonus),
                            customBonusModifiedBy: new FormControl(item.customBonusModifiedBy),
                            notes: new FormControl(item.notes)
                        });
                        inventoryFormGroup.addControl(item.name!, itemFormGroup);
                    });
                    return inventoryFormGroup;
                })(),
                features: (() => {
                    let featuresFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                    type FeatureFormGroupType = { name: FormControl<string | null>; description: FormControl<string | null>; };
                    storeData.sheet.SectionMain!.features?.forEach((featureItem: Feature) => {
                        const featureFormGroup: FormGroup<FeatureFormGroupType> = new FormGroup<FeatureFormGroupType>({
                            name: new FormControl(featureItem.name),
                            description: new FormControl(featureItem.description)
                        });
                        featuresFormGroup.addControl(featureItem.name!, featureFormGroup);
                    });
                    return featuresFormGroup;
                })(),
                description: FormControl<string>,
                notes: FormControl<string>
            } as unknown as DynamicFormGroup<SectionMainFormFields>,
            SectionProficiencies: (() => {
                type ProficienciesFormGroupType = { weapons: FormGroup<{[key: string]: FormControl<string | null>}>; armor: FormGroup<{[key: string]: FormControl<string | null>}>; tools: FormGroup<{[key: string]: FormControl<string | null>}>; languages: FormGroup<{[key: string]: FormControl<string | null>}>; };
                return new FormGroup<ProficienciesFormGroupType>({
                    weapons: (() => {
                        let weaponsFormGroup: FormGroup<{[key: string]: FormControl<string | null>}> = new FormGroup<{[key: string]: FormControl<string | null>}>({});
                        storeData.sheet.SectionProficiencies!.weapons?.forEach((weapon: string) => {
                            weaponsFormGroup.addControl(weapon, new FormControl(weapon));
                        });
                        return weaponsFormGroup;
                    })(),
                    armor: (() => {
                        let armorFormGroup: FormGroup<{[key: string]: FormControl<string | null>}> = new FormGroup<{[key: string]: FormControl<string | null>}>({});
                        storeData.sheet.SectionProficiencies!.armor?.forEach((armor: string) => {
                            armorFormGroup.addControl(armor, new FormControl(armor));
                        });
                        return armorFormGroup;
                    })(),
                    tools: (() => {
                        let toolsFormGroup: FormGroup<{[key: string]: FormControl<string | null>}> = new FormGroup<{[key: string]: FormControl<string | null>}>({});
                        storeData.sheet.SectionProficiencies!.tools?.forEach((tool: string) => {
                            toolsFormGroup.addControl(tool, new FormControl(tool));
                        });
                        return toolsFormGroup;
                    })(),
                    languages: (() => {
                        let languagesFormGroup: FormGroup<{[key: string]: FormControl<string | null>}> = new FormGroup<{[key: string]: FormControl<string | null>}>({});
                        storeData.sheet.SectionProficiencies!.languages?.forEach((language: string) => {
                            languagesFormGroup.addControl(language, new FormControl(language));
                        });
                        return languagesFormGroup;
                    })()
                });
            }) as unknown as DynamicFormGroup<SectionProficienciesFormFields>,
            SectionSavingThrows: (() => {
                let savingThrowsFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                type SavingThrowFormGroupType = { ability: FormControl<string | null>; proficiency: FormControl<string | null>; bonus: FormControl<number | null>; customBonusModifiedBy: FormControl<string | null>; };
                Object.keys(Constants.Abilities).map((abilityKey: string) => {
                    const savingThrowItem: SavingThrow = storeData.sheet.SectionSavingThrows![abilityKey]!;
                    const savingThrowFormGroup: FormGroup<SavingThrowFormGroupType> = new FormGroup<SavingThrowFormGroupType>({
                        ability: new FormControl(savingThrowItem.ability),
                        proficiency: new FormControl(savingThrowItem.proficiency),
                        bonus: new FormControl(savingThrowItem.bonus),
                        customBonusModifiedBy: new FormControl(savingThrowItem.customBonusModifiedBy)
                    });
                    savingThrowsFormGroup.addControl(savingThrowItem.ability!, savingThrowFormGroup);
                });
                return { savingThrows: savingThrowsFormGroup };
            }) as unknown as DynamicFormGroup<SectionSavingThrowsFormFields>,
            SectionSkills: (() => {
                let skillsFormGroup: FormGroup<{[key: string]: FormGroup<any>}> = new FormGroup<{[key: string]: FormGroup<any>}>({});
                type SkillFormGroupType = { name: FormControl<string | null>; ability: FormControl<string | null>; proficiency: FormControl<string | null | undefined>; bonus: FormControl<number | null | undefined>; customBonusModifiedBy: FormControl<string | null>; };
                storeData.sheet.SectionSkills!.skills?.forEach((skillItem: Skill) => {
                    const skillFormGroup: FormGroup<SkillFormGroupType> = new FormGroup<SkillFormGroupType>({
                        name: new FormControl(skillItem.name),
                        ability: new FormControl(skillItem.ability),
                        proficiency: new FormControl(skillItem.proficiency),
                        bonus: new FormControl(skillItem.bonus),
                        customBonusModifiedBy: new FormControl(skillItem.customBonusModifiedBy ?? null)
                    });
                    skillsFormGroup.addControl(skillItem.name!, skillFormGroup);
                });
                return { skills: skillsFormGroup };
            }) as unknown as DynamicFormGroup<SectionSkillsFormFields>
        };

        return newSheetForm;
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

    updateBonuses(abilityToUpdate: string) {
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
