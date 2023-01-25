<template>
  <main>
    <n-h2 prefix="bar" align-text>Search</n-h2>
    <EntrySearch />
    <n-h2 prefix="bar" align-text>Browse</n-h2>
    <n-grid cols="1 400:2">
      <n-grid-item>
        <BrowseOrganizations />
      </n-grid-item>
      <n-grid-item>
        <BrowseBlocks />
      </n-grid-item>
    </n-grid>
  </main>
</template>

<script setup lang="ts">
import { NH2, NGrid, NGridItem } from "naive-ui";
import EntrySearch from "@/components/search/auto-complete/EntrySearch.vue";
import BrowseOrganizations from "@/components/misc/BrowseOrganizations.vue";
import BrowseBlocks from "@/components/misc/BrowseBlocks.vue";
</script>
