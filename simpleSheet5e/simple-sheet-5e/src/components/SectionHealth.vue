<script setup lang="ts">
    import { Service } from '../service';
    import * as Constants from '../constants';

    const service = new Service();
    let data = service.get(Constants.Sections.SectionHealth);
</script>

<template>
    <div class="section-title">
        <h2>Health</h2>
    </div>
    <div class="section-content">
        <div class="column">
            <h3>Rests</h3>
            <div class="row">
                <div class="field-wrapper column">
                    <div class="input-wrapper">
                        <button type="button" id="health-rest-long">Long Rest</button>
                    </div>
                </div>
                <div class="field-wrapper column">
                    <div class="input-wrapper">
                        <button type="button" id="health-rest-short">Short Rest</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <h3>Hit Points</h3>
            <div class="row">
                <div class="field-wrapper column">
                    <h4>Max</h4>
                    <div class="input-wrapper">
                        <input type="text" id="health-hp-max" v-model="data.hpMax" @change="service.updateStore()" />
                    </div>
                </div>
                <div class="field-wrapper column">
                    <h4>Current</h4>
                    <div class="input-wrapper">
                        <input type="text" id="health-hp-current" v-model="data.hpCurrent" @change="service.updateStore()" />
                    </div>
                </div>
                <div class="field-wrapper column">
                    <h4>Temp</h4>
                    <div class="input-wrapper">
                        <input type="text" id="health-hp-temp" v-model="data.hpTemp" @change="service.updateStore()" />
                    </div>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="field-wrapper column">
                <h4>Conditions</h4>
                <div class="input-wrapper">
                    <textarea v-model="data.conditions" @change="service.updateStore()"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
