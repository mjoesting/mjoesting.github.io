<script setup lang="ts">
    import { Service } from '../service';
    import * as Constants from '../constants';
    
    const service = new Service();
    let data = service.get(Constants.Sections.SectionSkills);
</script>

<template>
    <div class="section-title">
        <h2>Skills</h2>
    </div>
    <div class="section-content add-gap">
        <div class="row border-bottom padding-bottom">
            <h5>Skill</h5>
            <h5>Proficient</h5>
            <h5>Ability</h5>
            <h5>Bonus</h5>
        </div>
        <div class="row center add-gap" v-for="(s, index) in data.skills">
            <h5>{{ s.name }}</h5>
            <div class="input-wrapper">
                <select id="skills-acrobatics-prof" v-model="data.skills[index]" @change="service.updateStore(data.skills[index])">
                    <option value="" :selected="!s.proficient"></option>
                    <option v-for="prof in Constants.Proficiencies" value="{{ prof }}" :selected="prof == s.proficient">{{ prof }}</option>
                </select>
            </div>
            <h6>{{ s.ability }}</h6>
            <div class="input-wrapper">
                <input type="text" id="skills-{{ s.name }}-mod" v-model="s.bonus" @change="service.updateStore()" /> 
                <span>{{ s.customBonusModifiedBy }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
