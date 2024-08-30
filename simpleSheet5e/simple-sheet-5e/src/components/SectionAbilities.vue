<script setup lang="ts">
    import { Store } from '../store';
    import { Service } from '../service';
    import * as Constants from '../constants';

    const service = new Service();
    let data = service.get(Constants.Sections.SectionAbilities);
</script>

<template>
    <div class="section-title">
        <h2>Abilities</h2>
    </div>
    <div class="section-content">
        <div class="row" v-for="a in Store.sheet.SectionAbilities">
            <div class="row center add-gap">
                <h4>{{ a.ability }}</h4>
                <div class="field-wrapper column">
                    <h5>Score</h5>
                    <div class="input-wrapper">
                        <input type="text" id="abilities-{{ a.name }}" v-model="a.score" />
                    </div>
                </div>
                <div class="field-wrapper column">
                    <h5>Bonus</h5>
                    <div class="input-wrapper">
                        <input type="text" id="abilities-{{ a.name }}-mod" v-model="a.bonus" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
