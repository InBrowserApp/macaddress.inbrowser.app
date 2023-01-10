import { getEntries } from "./getEntries";
import type { OUIEntry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<OUIEntry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
