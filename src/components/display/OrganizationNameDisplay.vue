<template>
  <n-text>
    {{ name }}
  </n-text>
</template>

<script setup lang="ts">
import { NText } from "naive-ui";

defineProps<{
  name: string;
}>();
</script>
