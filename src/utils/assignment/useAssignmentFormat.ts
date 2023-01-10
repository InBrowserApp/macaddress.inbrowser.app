import { computed } from "vue";
import type { Ref } from "vue";
import { get } from "@vueuse/core";

export function useAssignmentFormat(assignment: Ref<string> | string) {
  const assignmentFormat = computed(() => {
    const text = get(assignment).replace(/(.{2})/g, "$1:");
    // if text last character is ":", remove it
    return text.slice(-1) === ":" ? text.slice(0, -1) : text;
  });

  return { assignmentFormat };
}
