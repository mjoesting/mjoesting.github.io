<script setup lang="ts">
    import { Service } from '../service';
    import * as Constants from '../constants';

    const service = new Service();
    let data = service.get(Constants.Sections.SectionGeneral);
</script>

<template>
    <div class="section-title">
        <h2>General Info</h2>
    </div>
    <div class="section-content">
        <div class="row">
            <div class="field-wrapper column">
                <h3>Name</h3>
                <div class="input-wrapper">
                    <input type="text" id="general-name" v-model="data.name" @change="service.updateStore()" />
                </div>
            </div>
            <div class="field-wrapper column">
                <h3>Player</h3>
                <div class="input-wrapper">
                    <input type="text" id="general-player" v-model="data.player" @change="service.updateStore()" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="field-wrapper column">
                <h3>Race</h3>
                <div class="input-wrapper">
                    <input type="text" id="general-race" v-model="data.race" @change="service.updateStore()" />
                </div>
            </div>
            <div class="field-wrapper column">
                <h3>Background</h3>
                <div class="input-wrapper">
                    <input type="text" id="general-background" v-model="data.background" @change="service.updateStore()" />
                </div>
            </div>
        </div>
        <div class="row">
            <div class="field-wrapper column" id="general-class">
                <h3>Classes</h3>
                <template v-for="c in data?.classes">
                    <div class="row add-margin-bottom no-stretch">
                        <div class="input-wrapper width-150 add-margin-right">
                            <input type="text" v-model="c.name" @change="service.updateStore()" />
                        </div>
                        <div class="input-wrapper width-50">
                            <input type="text" v-model="c.level" @change="service.updateStore()" />
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
