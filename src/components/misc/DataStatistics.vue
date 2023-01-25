<template>
  <n-grid cols="1 400:2" y-gap="12">
    <n-grid-item>
      <n-statistic label="Record Count">
        <span v-if="pageCount">{{ pageCount }}</span>
        <n-skeleton text style="width: 3em" v-else />
      </n-statistic>
    </n-grid-item>
    <n-grid-item>
      <n-statistic label="Blocks">
        <span>{{ Object.keys(dataProviders).length }}</span>
      </n-statistic>
    </n-grid-item>
  </n-grid>
</template>

<script setup lang="ts">
import { NSkeleton, NStatistic, NGrid, NGridItem } from "naive-ui";
import { getWholeLength, dataProviders } from "@/data/blocks";
import { computedAsync } from "@vueuse/core";

const pageCount = computedAsync(getWholeLength, undefined);
</script>
