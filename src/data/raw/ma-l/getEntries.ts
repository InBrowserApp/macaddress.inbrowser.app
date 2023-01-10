import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { MALEntry } from "./types";

export async function getEntries(): Promise<MALEntry[]> {
  const csv = await getCSV();

  const data: MALEntry[] = await csvtojson().fromString(csv);

  return data;
}
