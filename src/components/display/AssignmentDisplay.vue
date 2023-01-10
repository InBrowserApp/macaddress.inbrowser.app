<template>
  <n-text code class="assignment-display">
    <span>{{ assignmentFormat }}</span>
    <span class="assignment-display-suffix">
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
}>();

// slice by two character and add ":"
const { assignmentFormat } = useAssignmentFormat(toRef(props, "assignment"));

// suffix with :XX:XX:XX
const assignmentSuffix = computed(() => {
  const assigmentLength = props.assignment.length;
  const suffixLength = 12 - assigmentLength;

  const suffix =
    (suffixLength % 2 === 1 ? "X" : "") +
    ":XX".repeat(Math.floor(suffixLength / 2));

  return suffix;
});
</script>

<style scoped>
.assignment-display {
  font-size: 2em;
}

.assignment-display-suffix {
  opacity: 0.2;
  user-select: none;
}
</style>
