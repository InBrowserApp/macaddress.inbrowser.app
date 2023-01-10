<template>
  <n-popover trigger="hover">
    <template #trigger>
      <n-button quaternary circle aria-label="Search Configs">
        <template #icon>
          <n-icon :component="Settings20Filled" />
        </template>
      </n-button>
    </template>
    <div class="search-config-panel">
      <n-space item-style="display: flex;">
        <n-checkbox v-model:checked="config.blocks.MAL" label="MAL" />
        <n-checkbox v-model:checked="config.blocks.MAM" label="MAM" />
        <n-checkbox v-model:checked="config.blocks.MAS" label="MAS" />
        <n-checkbox v-model:checked="config.blocks.IAB" label="IAB" />
        <n-checkbox v-model:checked="config.blocks.CID" label="CID" />
      </n-space>
    </div>
  </n-popover>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NPopover, NButton, NIcon, NCheckbox } from "naive-ui";
import Settings20Filled from "@vicons/fluent/Settings20Filled";
import type { SearchConfig } from "./SearchConfig";

const props = defineProps<{
  config: SearchConfig;
}>();

const emit = defineEmits<{
  (event: "update:config", config: SearchConfig): void;
}>();

const config = computed({
  get: () => props.config,
  set: (config) => emit("update:config", config),
});
</script>

<style scoped>
.search-config-panel {
  min-width: 300px;
  max-width: 80vw;
  padding: 0.5em;
}
</style>
