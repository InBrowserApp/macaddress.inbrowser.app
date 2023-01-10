<template>
  <main>
    <div v-if="entry">
      <EntryDisplay :entry="entry" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { getEntryFromAssignment } from "@/data/raw/oui28";
import { useRouteParams } from "@vueuse/router";
import { computedAsync } from "@vueuse/core";
import EntryDisplay from "@/components/display/EntryDisplay.vue";

const assignment = useRouteParams<string>("assignment");
const entry = computedAsync(async () => {
  return await getEntryFromAssignment(assignment.value);
});
</script>
