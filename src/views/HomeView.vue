<template>
  <main>
    <n-h1 prefix="bar" align-text>Search</n-h1>
    <EntrySearch />
  </main>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import EntrySearch from "@/components/search/auto-complete/EntrySearch.vue";
</script>
