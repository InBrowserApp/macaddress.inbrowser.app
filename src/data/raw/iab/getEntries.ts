import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { IABEntry } from "./types";

export async function getEntries(): Promise<IABEntry[]> {
  const csv = await getCSV();

  const data: IABEntry[] = await csvtojson().fromString(csv);

  return data;
}
