<template>
  <main>
    <n-h1 prefix="bar" align-text>
      <AssignmentHeading>{{ assignmentFormat }}</AssignmentHeading>
    </n-h1>
    <div v-if="entry">
      <EntryDisplay :entry="entry" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";
import AssignmentHeading from "@/components/display/AssignmentHeading.vue";
import { NH1 } from "naive-ui";
import { dataProviders, type Block } from "@/data/blocks";
import { useRouteParams } from "@vueuse/router";
import { computedAsync } from "@vueuse/core";
import EntryDisplay from "@/components/display/EntryDisplay.vue";
import { useAssignmentFormat } from "@/utils/assignment/useAssignmentFormat";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";

const route = useRoute();
const block = computed(() => {
  const prefix = "assignment:";
  const block = (route.name as string).slice(prefix.length) as Block;
  return block;
});
const dataProvider = computed(() => {
  return dataProviders[block.value];
});

const assignment = useRouteParams<string>("assignment");
const entry = computedAsync(async () => {
  return await dataProvider.value.getEntryFromAssignment(assignment.value);
});
const { assignmentFormat } = useAssignmentFormat(assignment);

const ownedByDescription = computed(() => {
  if (entry.value) {
    return ` owned by ${entry.value["Organization Name"]}`;
  }
  return "";
});

useHead(
  computed(() => ({
    title: `${assignmentFormat.value} | MAC Address InBrowser.App`,
    meta: [
      {
        name: "description",
        content: `MAC address prefix ${assignmentFormat.value}${ownedByDescription.value}.`,
      },
    ],
    link: [
      {
        rel: "canonical",
        href: `https://macaddress.inbrowser.app${route.path}`,
      },
    ],
  }))
);
</script>
