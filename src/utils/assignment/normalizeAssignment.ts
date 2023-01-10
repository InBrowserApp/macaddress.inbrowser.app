export function normalizeAssignment(assignment: string) {
  const upper = assignment.toUpperCase();
  // keep only 0-9 and A-F

  return upper.replace(/[^0-9A-F]/g, "");
}
