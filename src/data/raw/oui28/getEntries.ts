import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { OUI28Entry } from "./types";

export async function getEntries(): Promise<OUI28Entry[]> {
  const csv = await getCSV();

  const data: OUI28Entry[] = await csvtojson().fromString(csv);

  return data;
}
