<template>
  <n-text class="entry-display">
    <span class="query result">{{ queryResult }}</span>
    <span class="result">{{ resultWithoutQuery }}</span>
    <span class="query suffix">{{ queryWithoutResult }}</span>
    <span class="suffix">
      {{ assignmentSuffix }}
    </span>
  </n-text>
</template>

<script setup lang="ts">
import { NText } from "naive-ui";
import { computed, toRef } from "vue";
import { useAssignmentFormat } from "@/utils/assignment/useAssignmentFormat";

const props = defineProps<{
  assignment: string;
  query: string;
}>();

// slice by two character and add ":"
const resultMAC = useAssignmentFormat(
  toRef(props, "assignment")
).assignmentFormat;
const queryMAC = useAssignmentFormat(toRef(props, "query")).assignmentFormat;

// get the short one
const queryResult = computed(() =>
  queryMAC.value.length < resultMAC.value.length
    ? queryMAC.value
    : resultMAC.value
);

// if query is larger than result
const queryWithoutResult = computed(() =>
  queryMAC.value.length < resultMAC.value.length
    ? ""
    : queryMAC.value.slice(resultMAC.value.length)
);

const resultWithoutQuery = computed(() =>
  queryMAC.value.length < resultMAC.value.length
    ? resultMAC.value.slice(queryMAC.value.length)
    : ""
);

// suffix with :XX:XX:XX
const assignmentSuffix = computed(() => {
  const assignmentLength = Math.max(
    props.query.length,
    props.assignment.length
  );
  const suffixLength = 12 - assignmentLength;

  const suffix =
    (suffixLength % 2 === 1 ? "X" : "") +
    ":XX".repeat(Math.floor(suffixLength / 2));

  return suffix;
});
</script>

<style scoped>
.suffix {
  opacity: 0.2;
  user-select: none;
}

.query {
  text-decoration: underline;
}

.query.suffix {
  opacity: 0.5;
}

.entry-display {
  font-family: SFMono-Regular, Menlo, Consolas, Courier, monospace;
}
</style>
