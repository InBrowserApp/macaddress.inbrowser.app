import { getEntries } from "./getEntries";
import type { MASEntry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<MASEntry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
