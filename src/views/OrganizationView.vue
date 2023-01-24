<template>
  <main>
    <n-h1 prefix="bar" align-text>
      {{ organization }}
    </n-h1>
  </main>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import { useRouteParams } from "@vueuse/router";

const organization = useRouteParams<string>("organization");
</script>
