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
      <n-space vertical>
        <n-checkbox
          v-for="block in blocks"
          :key="block"
          :label="`${getBlockFullName(block)} (${block})`"
          v-model:checked="config.blocks[block]"
        />
      </n-space>
    </div>
  </n-popover>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NPopover, NButton, NIcon, NCheckbox, NSpace } from "naive-ui";
import Settings20Filled from "@vicons/fluent/Settings20Filled";
import type { SearchConfig } from "./SearchConfig";
import { blocks } from "@/data/blocks";
import { getBlockFullName } from "@/utils/block";

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
  max-width: 80vw;
  padding: 0.5em;
}
</style>
