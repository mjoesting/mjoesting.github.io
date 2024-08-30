<script setup lang="ts">
    import { Service } from '../service';
    import * as Constants from '../constants';

    const service = new Service();
    let data = service.get(Constants.Sections.SectionDefenses);
</script>

<template>
    <div class="section-title">
        <h2>Defenses</h2>
    </div>
    <div class="section-content">
        <div class="column">
            <div class="field-wrapper column">
                <h4>Armor Class</h4>
                <div class="input-wrapper">
                    <input type="text" id="health-ac" v-model="data.ac" @change="service.updateStore()" />
                </div>
            </div>
        </div>
        <div class="column">
            <div class="field-wrapper column">
                <h4>Immunities</h4>
                <div class="input-wrapper">
                    <textarea v-model="data.immunities" @change="service.updateStore()"></textarea>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="field-wrapper column">
                <h4>Resistances</h4>
                <div class="input-wrapper">
                    <textarea v-model="data.resistances" @change="service.updateStore()"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
