<template>
  <main>
    <n-h1 prefix="bar" align-text>
      {{ organization }}
    </n-h1>
    <n-p>
      <n-list>
        <n-list-item
          v-for="assignment in assignments"
          :key="assignment.Assignment"
        >
          <template #suffix>
            <RegistryTag
              type="success"
              size="small"
              :registry="assignment.Registry"
              round
            />
          </template>
          <RouterLink :to="`/${assignment.Registry}/${assignment.Assignment}`">
            <AssignmentDisplay :assignment="assignment.Assignment" />
          </RouterLink>
        </n-list-item>
      </n-list>
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH1, NList, NP, NListItem } from "naive-ui";
import { useRouteParams } from "@vueuse/router";
import { computedAsync } from "@vueuse/core";
import { searchOrganization } from "@/data/blocks";
import AssignmentDisplay from "@/components/display/AssignmentDisplay.vue";
import RegistryTag from "@/components/display/RegistryTag.vue";

const organization = useRouteParams<string>("organization");
const assignments = computedAsync(async () => {
  return await searchOrganization(organization.value, {
    blocks: {
      "MA-L": true,
      "MA-M": true,
      "MA-S": true,
      IAB: true,
      CID: true,
    },
  });
});
</script>
