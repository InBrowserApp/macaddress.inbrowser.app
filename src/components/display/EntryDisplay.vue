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
      <OrganizationNameDisplay :name="entry['Organization Name']" />
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
import type { MALEntry } from "@/data/ieee/ma-l";
import type { MAMEntry } from "@/data/ieee/ma-m";
import type { MASEntry } from "@/data/ieee/ma-s";
import type { CIDEntry } from "@/data/ieee/cid";
import type { IABEntry } from "@/data/ieee/iab";

import AssignmentDisplay from "./AssignmentDisplay.vue";
import OrganizationNameDisplay from "./OrganizationNameDisplay.vue";
import OrganizationAddressDisplay from "./OrganizationAddressDisplay.vue";
import RegistryType from "./RegistryType.vue";

defineProps<{
  entry: MALEntry | MAMEntry | MASEntry | CIDEntry | IABEntry;
}>();
</script>
