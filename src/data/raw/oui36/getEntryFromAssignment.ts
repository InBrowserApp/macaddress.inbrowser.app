import { getEntries } from "./getEntries";
import type { OUI36Entry } from "./types";

export async function getEntryFromAssignment(
  assignment: string
): Promise<OUI36Entry | undefined> {
  const data = await getEntries();
  const entry = data.find((entry) => entry.Assignment === assignment);

  return entry;
}
