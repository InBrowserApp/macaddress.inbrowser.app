<template>
  <main>
    <n-h1 prefix="bar" align-text>
      {{ organization }}
    </n-h1>
    <n-p>
      <n-list>
        <n-list-item
          v-for="assignment in assignmentsDisplay"
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
    <n-space justify="center" v-if="pageCount > 1">
      <n-pagination v-model:page="pageNum" :page-count="pageCount" />
    </n-space>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { NH1, NList, NP, NListItem, NPagination, NSpace } from "naive-ui";
import { useRouteParams } from "@vueuse/router";
import { computedAsync } from "@vueuse/core";
import { searchOrganization } from "@/data/blocks";
import AssignmentDisplay from "@/components/display/AssignmentDisplay.vue";
import RegistryTag from "@/components/display/RegistryTag.vue";

const pageNum = ref(1);
const pageSize = ref(8);
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
}, []);

const pageCount = computed(() => {
  return Math.ceil(assignments.value.length / pageSize.value);
});

const assignmentsDisplay = computed(() =>
  assignments.value.slice(
    (pageNum.value - 1) * pageSize.value,
    pageNum.value * pageSize.value
  )
);
</script>
