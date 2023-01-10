<template>
  <main>
    {{ entry }}
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { getEntryFromAssignment, getEntries } from "@/data/raw/oui";
import { useRouteParams } from "@vueuse/router";
import { computedAsync } from "@vueuse/core";

const assignment = useRouteParams<string>("assignment");
const entry = computedAsync(async () => {
  return await getEntryFromAssignment(assignment.value);
});

onMounted(async () => {
  console.log(await getEntries());
});
</script>
