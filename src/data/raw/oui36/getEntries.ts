import { getCSV } from "./getCSV";
import csvtojson from "csvtojson";
import type { OUI36Entry } from "./types";

export async function getEntries(): Promise<OUI36Entry[]> {
  const csv = await getCSV();

  const data: OUI36Entry[] = await csvtojson().fromString(csv);

  return data;
}
