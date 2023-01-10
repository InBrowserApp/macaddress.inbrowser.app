<template>
  <main>
    <n-h1 prefix="bar" align-text>
      {{ assignmentFormat }} | Mac Address Block Small
    </n-h1>
    <div v-if="entry">
      <EntryDisplay :entry="entry" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import { MASDataProvider } from "@/data/ieee/ma-s";
import { useRouteParams } from "@vueuse/router";
import { computedAsync } from "@vueuse/core";
import EntryDisplay from "@/components/display/EntryDisplay.vue";
import { useAssignmentFormat } from "@/utils/assignment/useAssignmentFormat";

const assignment = useRouteParams<string>("assignment");
const entry = computedAsync(async () => {
  return await MASDataProvider.getEntryFromAssignment(assignment.value);
});
const { assignmentFormat } = useAssignmentFormat(assignment);
</script>
