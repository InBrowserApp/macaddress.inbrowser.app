<template>
  <n-text>
    {{ address }}
  </n-text>
</template>

<script setup lang="ts">
import { NText } from "naive-ui";

defineProps<{
  address: string;
}>();
</script>
