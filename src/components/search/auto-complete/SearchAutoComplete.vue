<template>
  <n-auto-complete
    v-model:value="query"
    :input-props="{
      autocomplete: 'off',
      autocorrect: 'off',
      autocapitalize: 'off',
      spellcheck: 'false',
    }"
    :options="options"
    :render-label="renderLabel"
    :get-show="() => true"
    :menu-props="{ class: 'page-search-auto-complete-menu' }"
    @select="router.push"
    clear-after-select
    placeholder="CC:80:37:33:5D:ED"
    ref="searchInput"
  />
</template>

<script setup lang="ts">
import { ref, computed, h, onMounted, nextTick } from "vue";
import { NAutoComplete, type SelectOption } from "naive-ui";
import { computedAsync } from "@vueuse/core";
import EntrySearchResultEntry from "./EntrySearchResultEntry.vue";
import { useRouter } from "vue-router";
import type { SearchConfig } from "../SearchConfig";
import { searchAssignments, type BlockEntryType } from "@/data/blocks";
import { normalizeAssignment } from "@/utils/assignment/normalizeAssignment";

const props = defineProps<{
  config: SearchConfig;
}>();

const searchInput = ref<InstanceType<typeof NAutoComplete> | null>(null);
const router = useRouter();
const query = ref("");

const normalizedQuery = computed(() => normalizeAssignment(query.value));

const searchResults = computedAsync(async () => {
  if (normalizedQuery.value === "") {
    return [];
  }

  const results = await searchAssignments(normalizedQuery.value, props.config);
  const slicedResults = results.slice(0, 20);
  return slicedResults;
}, []);

const options = computed(() => {
  return searchResults.value.map((entry) => {
    return {
      label: entry.Assignment,
      value: "/" + entry.Registry + "/" + entry.Assignment,
      entry: entry,
    };
  });
});

const renderLabel = (option: SelectOption) => {
  return h(EntrySearchResultEntry, {
    entry: option.entry as BlockEntryType,
    query: normalizedQuery.value,
  });
};

// auto-focus
onMounted(() => {
  nextTick(() => {
    searchInput.value?.focus();

    // FIXME: this is a hack to disable autocorrect on mobiles
    searchInput.value?.inputInstRef?.inputElRef?.setAttribute(
      "autocorrect",
      "off"
    );
  });
});
</script>

<style>
.page-search-auto-complete-menu .n-base-select-option__content {
  width: 100%;
}

.page-search-auto-complete-menu.n-base-select-menu
  .n-base-select-option.n-base-select-option--show-checkmark {
  padding-right: calc(var(--n-option-padding-right) + 3px);
}
</style>
