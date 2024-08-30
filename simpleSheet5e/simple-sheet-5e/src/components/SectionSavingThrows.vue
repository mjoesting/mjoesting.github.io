<script setup lang="ts">
    import { Store } from '../store';
    import { Service } from '../service';
    import * as Constants from '../constants';

    const service = new Service();
    let data = service.get(Constants.Sections.SectionSavingThrows);
    console.log('SectionSavingThrows data: ', data);
</script>

<template>
    <div class="section-title">
        <h2>Saving Throws</h2>
    </div>
    <div class="section-content">
        <div class="row" v-for="(s, index) in data.savingThrows">
            <div class="row center add-gap">
                <h4>{{ s.ability }}</h4>
                <div class="field-wrapper column">
                    <h5>Proficiency</h5>
                    <div class="input-wrapper">
                        <select id="skills-acrobatics-prof" v-model="data[index]" @change="service.updateStore(s)">
                            <option value="" :selected="!s.proficient"></option>
                            <option v-for="prof in Constants.Proficiencies" value="{{ prof }}" :selected="prof == s.proficient">{{ prof }}</option>
                        </select>
                    </div>
                </div>
                <div class="field-wrapper column">
                    <h5>Bonus</h5>
                    <div class="input-wrapper">
                        <input type="text" id="saves-{{s.ability}}-mod" v-model="s.bonus" @change="service.updateStore()" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
