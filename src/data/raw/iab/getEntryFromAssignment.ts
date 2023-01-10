import { getEntries } from "./getEntries";
import type { IABEntry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<IABEntry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
