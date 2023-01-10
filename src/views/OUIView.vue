<template>
  <main>Main View</main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getEntries } from "@/data/raw/oui";

onMounted(async () => {
  console.log(await getEntries());
});
</script>
