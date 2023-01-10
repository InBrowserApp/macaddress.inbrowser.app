import { getEntries } from "./getEntries";
import type { OUI28Entry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<OUI28Entry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
