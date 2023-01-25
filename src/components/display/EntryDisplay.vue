<template>
  <n-descriptions
    label-placement="left"
    bordered
    :column="1"
    content-style="width: 100%"
  >
    <n-descriptions-item label="Assignment">
      <AssignmentDisplay :assignment="entry.Assignment" />
    </n-descriptions-item>
    <n-descriptions-item label="Organization Name">
      <RouterLink
        :to="`/organizations/${entry['Organization Name']}`"
        class="organization-link"
      >
        <OrganizationNameDisplay :name="entry['Organization Name']" />
      </RouterLink>
    </n-descriptions-item>
    <n-descriptions-item label="Organization Address">
      <OrganizationAddressDisplay :address="entry['Organization Address']" />
    </n-descriptions-item>
    <n-descriptions-item label="Registry">
      <RegistryType :registry="entry.Registry" />
    </n-descriptions-item>
  </n-descriptions>
</template>

<script setup lang="ts">
import { NDescriptions, NDescriptionsItem } from "naive-ui";
import type { MALEntry } from "@/data/blocks/ma-l";
import type { MAMEntry } from "@/data/blocks/ma-m";
import type { MASEntry } from "@/data/blocks/ma-s";
import type { CIDEntry } from "@/data/blocks/cid";
import type { IABEntry } from "@/data/blocks/iab";

import AssignmentDisplay from "./AssignmentDisplay.vue";
import OrganizationNameDisplay from "./OrganizationNameDisplay.vue";
import OrganizationAddressDisplay from "./OrganizationAddressDisplay.vue";
import RegistryType from "./RegistryType.vue";

defineProps<{
  entry: MALEntry | MAMEntry | MASEntry | CIDEntry | IABEntry;
}>();
</script>

<style scoped>
.organization-link {
  text-decoration: none;
  color: inherit;
}

.organization-link:hover {
  text-decoration: underline;
}
</style>
