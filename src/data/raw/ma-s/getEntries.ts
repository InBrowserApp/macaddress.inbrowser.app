import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { MASEntry } from "./types";

export async function getEntries(): Promise<MASEntry[]> {
  const csv = await getCSV();

  const data: MASEntry[] = await csvtojson().fromString(csv);

  return data;
}
