import { DataProvider } from "../common";

const path = "/data/oui36/oui36.csv";
export interface MASEntry {
  Assignment: string;
  "Organization Address": string;
  "Organization Name": string;
  Registry: "MA-S";
}

export const MASDataProvider = new DataProvider<MASEntry>(path);
