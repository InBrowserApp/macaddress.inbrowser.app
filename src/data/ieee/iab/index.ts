import { DataProvider } from "../common";

const path = "/data/iab/iab.csv";
export interface IABEntry {
  Assignment: string;
  "Organization Address": string;
  "Organization Name": string;
  Registry: "IAB";
}

export const IABDataProvider = new DataProvider<IABEntry>(path);
