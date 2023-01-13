<template>
  <n-tag :bordered="false">
    {{ registry }}
  </n-tag>
</template>

<script lang="ts" setup>
import { NTag } from "naive-ui";
import type { Block } from "@/data/blocks";

defineProps<{
  registry: Block;
}>();
</script>
