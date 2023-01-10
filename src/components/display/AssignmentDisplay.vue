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
import { computed } from "vue";

const props = defineProps<{
  assignment: string;
}>();

// slice by two character and add ":"
const assignmentFormat = computed(() => {
  const text = props.assignment.replace(/(.{2})/g, "$1:");
  // if text last character is ":", remove it
  return text.slice(-1) === ":" ? text.slice(0, -1) : text;
});

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
