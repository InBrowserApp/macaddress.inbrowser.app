import { getEntries } from "./getEntries";
import type { MALEntry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<MALEntry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
