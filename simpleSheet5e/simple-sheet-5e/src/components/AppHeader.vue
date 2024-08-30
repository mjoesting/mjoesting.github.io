<script setup lang="ts">
import { Store } from '../store';
import { Service } from '../service';
import { toRaw } from 'vue';
// goes on the Button, eventually --  :disabled="!service.StoreRef.value.state.isUpdated"

const service = new Service();
const data = toRaw({...Store});
</script>

<template>
    <header>
        <h1>Simple Sheet 5e</h1>
        <div class="header-buttons">
            <div class="input-wrapper">
                <button id="save-button" :disabled="!data.state.isUpdated" @click="service.saveToStorage()">Save</button>
            </div>
        </div>
    </header>
</template>

<style scoped>
    header {
        flex: 0 0 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
