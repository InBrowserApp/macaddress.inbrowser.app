<template>
  <main>
    <n-h1 prefix="bar" align-text>
      {{ organization }}
    </n-h1>
    <n-p>
      {{ assignments }}
    </n-p>
  </main>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import { useRouteParams } from "@vueuse/router";
import { computedAsync } from "@vueuse/core";
import { searchOrganization } from "@/data/blocks";

const organization = useRouteParams<string>("organization");
const assignments = computedAsync(async () => {
  return await searchOrganization(organization.value, {
    blocks: {
      "MA-L": true,
      "MA-M": true,
      "MA-S": true,
      IAB: true,
      CID: true,
    },
  });
});
</script>
