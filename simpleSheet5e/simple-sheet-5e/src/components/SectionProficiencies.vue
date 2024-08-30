<script setup lang="ts">
    import { Service } from '../service';
    import * as Constants from '../constants';

    const service = new Service();
    let data = service.get(Constants.Sections.SectionProficiencies);
</script>

<template>
    <div class="section-title">
        <h2>Proficiencies</h2>
    </div>
    <div class="section-content">
        <div class="field-wrapper column">
            <h4>Weapons</h4>
            <div class="input-wrapper">
                <textarea v-model="data.weapons" @change="service.updateStore()"></textarea>
            </div>
        </div>
        <div class="field-wrapper column">
            <h4>Armor</h4>
            <div class="input-wrapper">
                <textarea v-model="data.armor" @change="service.updateStore()"></textarea>
            </div>
        </div>
        <div class="field-wrapper column">
            <h4>Tools</h4>
            <div class="input-wrapper">
                <textarea v-model="data.tools" @change="service.updateStore()"></textarea>
            </div>
        </div>
        <div class="field-wrapper column">
            <h4>Languages</h4>
            <div class="input-wrapper">
                <textarea v-model="data.languages" @change="service.updateStore()"></textarea>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
