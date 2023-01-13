<template>
  <a href="" @click.prevent class="search-entry-a">
    <div>
      <n-space justify="space-between" align="center" class="entry-content">
        <div>
          <div>
            <EntrySearchResultEntryAssignment
              :query="query"
              :assignment="entry.Assignment"
            />
          </div>
          <div>
            <span class="search-organization-name">
              {{ entry["Organization Name"] }}
            </span>
          </div>
        </div>
        <n-space>
          <RegistryTag
            type="success"
            size="small"
            :registry="entry.Registry"
            round
          />
        </n-space>
      </n-space>
    </div>
  </a>
</template>

<script setup lang="ts">
import { NSpace } from "naive-ui";
import type { BlockEntryType } from "@/data/blocks";
import EntrySearchResultEntryAssignment from "./EntrySearchResultEntryAssignment.vue";
import RegistryTag from "@/components/display/RegistryTag.vue";

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

.search-organization-name {
  font-size: 0.8em;
}

.entry-content {
  width: 100%;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
}
</style>
