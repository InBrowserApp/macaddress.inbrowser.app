import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { CIDEntry } from "./types";

export async function getEntries(): Promise<CIDEntry[]> {
  const csv = await getCSV();

  const data: CIDEntry[] = await csvtojson().fromString(csv);

  return data;
}
