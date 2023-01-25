<template>
  <n-text>
    {{ `${getBlockFullName(registry)} (${registry})` }}
  </n-text>
</template>

<script setup lang="ts">
import { NText } from "naive-ui";
import { getBlockFullName } from "@/utils/block";

import type { Block } from "@/data/blocks";

defineProps<{
  registry: Block;
}>();
</script>
