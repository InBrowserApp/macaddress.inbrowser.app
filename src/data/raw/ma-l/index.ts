import { DataProvider } from "../common";

const path = "/data/oui/oui.csv";
export interface MALEntry {
  Assignment: string;
  "Organization Address": string;
  "Organization Name": string;
  Registry: "MA-L";
}

export const MALDataProvider = new DataProvider<MALEntry>(path);
