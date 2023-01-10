import { DataProvider } from "../common";

const path = "/data/oui28/mam.csv";
export interface MAMEntry {
  Assignment: string;
  "Organization Address": string;
  "Organization Name": string;
  Registry: "MA-M";
}

export const MAMDataProvider = new DataProvider<MAMEntry>(path);
