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
    <n-h2 prefix="bar" align-text>Statistics</n-h2>
    <DataStatistics />
  </main>
</template>

<script setup lang="ts">
import { NH2, NGrid, NGridItem } from "naive-ui";
import EntrySearch from "@/components/search/auto-complete/EntrySearch.vue";
import BrowseOrganizations from "@/components/misc/BrowseOrganizations.vue";
import BrowseBlocks from "@/components/misc/BrowseBlocks.vue";
import DataStatistics from "@/components/misc/DataStatistics.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "MAC Address InBrowser.App",
  meta: [
    {
      name: "description",
      content:
        "MAC Address InBrowser.App is an offline-capable PWA for MAC Address. Fully runs in your browser. Zero API latency.",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: `https://macaddress.inbrowser.app/`,
    },
  ],
});
</script>
