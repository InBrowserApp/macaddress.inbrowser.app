import { DataProvider } from "../common";

const path = "/data/cid/cid.csv";
export interface CIDEntry {
  Assignment: string;
  "Organization Address": string;
  "Organization Name": string;
  Registry: "CID";
}

export const CIDDataProvider = new DataProvider<CIDEntry>(path);
