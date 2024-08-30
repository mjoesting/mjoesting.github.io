<script setup lang="ts">
import { toRaw } from 'vue';
import AppHeader from './components/AppHeader.vue';
import SectionAbilities from './components/SectionAbilities.vue';
import SectionDefenses from './components/SectionDefenses.vue';
import SectionGeneral from './components/SectionGeneral.vue';
import SectionHealth from './components/SectionHealth.vue';
import SectionMain from './components/SectionMain.vue';
import SectionProfifiences from './components/SectionProficiencies.vue';
import SectionSavingThrows from './components/SectionSavingThrows.vue';
import SectionSkills from './components/SectionSkills.vue';
import { Service } from './service';
import { Store } from './store';

const service = new Service();
service.initData();

console.log('store from app.vue: ', toRaw(Store));
</script>

<template>
  <div id="wrapper">
    <AppHeader />
    <main>
        <section id="section-general" class="section-wrapper">
          <SectionGeneral />
        </section>
        <section id="section-health" class="section-wrapper">
          <SectionHealth />
        </section>
        <section id="section-defenses" class="section-wrapper">
          <SectionDefenses />
        </section>
        <section id="section-abilities" class="section-wrapper">
          <SectionAbilities />
        </section>
        <section id="section-saves" class="section-wrapper">
          <SectionSavingThrows />
        </section>
        <section id="section-proficiencies" class="section-wrapper">
          <SectionProfifiences />
        </section>
        <section id="section-skills" class="section-wrapper">
          <SectionSkills />
        </section>
        <div id="section-main" class="section-wrapper">
          <SectionMain />
        </div>
    </main>
  </div>
</template>

<style scoped>
  #wrapper {
      height: 100%;
      width: 100%;
      max-width: 1024px;
      margin: 0 auto;
      display: flex;
      flex-flow: column nowrap;
      justify-content: flex-start;
      align-items: stretch;
  }

  main {
      flex: 1 1 calc(100% - 80px);
      height: calc(100% - 80px);
      padding: 15px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      column-gap: 15px;
      row-gap: 15px;
      overflow-y: auto;
  }

  /* Grid Positions */
  #section-general {
      grid-column: 1 / span 3;
      grid-row: 1 / span 1;
  }

  #section-health {
      grid-column: 5 / span 1;
      grid-row: 1 / span 1;
  }

  #section-abilities {
      grid-column: 3 / span 1;
      grid-row: 2 / span 1;
  }

  #section-defenses {
      grid-column: 4 / span 1;
      grid-row: 1 / span 1;
  }

  #section-saves {
      grid-column: 4 / span 1;
      grid-row: 2 / span 1;
  }

  #section-proficiencies {
      grid-column: 5 / span 1;
      grid-row: 2 / span 1;
  }

  #section-skills {
      grid-column: 1 / span 2;
      grid-row: 2 / span 9;
  }

  #section-main {
      grid-column: 3 / span 3;
      grid-row: 3 / span 8;
  }
</style>
