import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { MAMEntry } from "./types";

export async function getEntries(): Promise<MAMEntry[]> {
  const csv = await getCSV();

  const data: MAMEntry[] = await csvtojson().fromString(csv);

  return data;
}
