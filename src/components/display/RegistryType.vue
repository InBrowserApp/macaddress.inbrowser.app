<template>
  <n-text>
    {{ registry }}
  </n-text>
</template>

<script setup lang="ts">
import { NText } from "naive-ui";

defineProps<{
  registry: string;
}>();
</script>
