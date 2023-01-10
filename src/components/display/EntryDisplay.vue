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
import type { OUIEntry } from "@/data/raw/oui";
import AssignmentDisplay from "./AssignmentDisplay.vue";
import OrganizationNameDisplay from "./OrganizationNameDisplay.vue";
import OrganizationAddressDisplay from "./OrganizationAddressDisplay.vue";
import RegistryType from "./RegistryType.vue";

defineProps<{
  entry: OUIEntry;
}>();
</script>
