import { getEntries } from "./getEntries";
import type { MAMEntry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<MAMEntry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
