<template>
  <main>
    <n-h1 prefix="bar" align-text>
      {{ getBlockFullName(block) }} ({{ block }})
    </n-h1>
    <n-p>
      <n-list>
        <n-list-item
          v-for="assignment in assignmentsDisplay"
          :key="assignment.Assignment"
        >
          <div>
            <div>
              <RouterLink
                :to="`/${assignment.Registry}/${assignment.Assignment}`"
              >
                <AssignmentDisplay :assignment="assignment.Assignment" />
              </RouterLink>
            </div>
            <div>
              {{ assignment["Organization Name"] }}
            </div>
          </div>
        </n-list-item>
      </n-list>
    </n-p>
    <n-space justify="center" v-if="pageCount > 1">
      <n-pagination v-model:page="pageNum" :page-count="pageCount" />
    </n-space>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { dataProviders, type Block } from "@/data/blocks";
import { computedAsync } from "@vueuse/core";
import { useRoute } from "vue-router";
import AssignmentDisplay from "@/components/display/AssignmentDisplay.vue";
import { NH1, NList, NP, NListItem, NPagination, NSpace } from "naive-ui";
import { getBlockFullName } from "@/utils/block";

const route = useRoute();
const block = computed(() => {
  const prefix = "block:";
  const block = (route.name as string).slice(prefix.length) as Block;
  return block;
});
const dataProvider = computed(() => {
  return dataProviders[block.value];
});

const assignments = computedAsync(async () => {
  return await dataProvider.value.getEntries();
}, []);

const pageNum = ref(1);
const pageSize = ref(6);

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
