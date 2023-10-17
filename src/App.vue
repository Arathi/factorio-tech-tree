<script setup lang="ts">
import { onMounted } from 'vue';
import TechnologyIcon from './components/TechnologyIcon.vue';
import { useTechnologyStore } from './stores/TechnologyStore';

const store = useTechnologyStore();

onMounted(() => {
  store.init();
});
</script>

<template>
  <technology-icon technology-id="energy-weapons-damage-3" />
</template>

<style scoped>
</style>
