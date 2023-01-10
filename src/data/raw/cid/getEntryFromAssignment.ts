import { getEntries } from "./getEntries";
import type { CIDEntry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<CIDEntry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
