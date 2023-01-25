<template>
  <main>
    <n-h1 prefix="bar" align-text>Browse By Organizations</n-h1>
    <n-p>
      <n-list>
        <n-list-item
          v-for="organization in organizationsDisplay"
          :key="organization"
        >
          <RouterLink
            :to="`/organizations/${organization}`"
            class="organization-link"
          >
            {{ organization }}
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
import { computedAsync } from "@vueuse/core";
import { getOrganizations } from "@/data/blocks";

const pageNum = ref(1);
const pageSize = ref(10);
const organizations = computedAsync(async () => {
  return await getOrganizations({
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
  return Math.ceil(organizations.value.length / pageSize.value);
});

const organizationsDisplay = computed(() =>
  organizations.value.slice(
    (pageNum.value - 1) * pageSize.value,
    pageNum.value * pageSize.value
  )
);
</script>

<style scoped>
.organization-link {
  color: inherit;
  text-decoration: none;
}

.organization-link:hover {
  text-decoration: underline;
}
</style>
