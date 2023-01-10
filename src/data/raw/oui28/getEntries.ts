import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { OUIEntry } from "./types";

export async function getEntries(): Promise<OUIEntry[]> {
  const csv = await getCSV();

  const data: OUIEntry[] = await csvtojson().fromString(csv);

  return data;
}
