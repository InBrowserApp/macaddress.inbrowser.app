<template>
  <a href="" @click.prevent class="search-entry-a">
    <n-space justify="space-between" style="width: 100%">
      <EntrySearchResultEntryAssignment
        :query="query"
        :assignment="entry.Assignment"
      />
      <n-space>
        {{ entry.Registry }}
      </n-space>
    </n-space>
  </a>
</template>

<script setup lang="ts">
import { NSpace } from "naive-ui";
import type { BlockEntryType } from "@/data/blocks";
import EntrySearchResultEntryAssignment from "./EntrySearchResultEntryAssignment.vue";

defineProps<{
  entry: BlockEntryType;
  query: string;
}>();
</script>

<style scoped>
.search-entry-a {
  text-decoration: none;
  color: inherit;
}

.search-entry-a:hover {
  text-decoration: none;
}
</style>
