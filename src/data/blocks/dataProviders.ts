import { CIDDataProvider } from "./cid";
import { IABDataProvider } from "./iab";
import { MALDataProvider } from "./ma-l";
import { MAMDataProvider } from "./ma-m";
import { MASDataProvider } from "./ma-s";

export const dataProviders = {
  CID: CIDDataProvider,
  IAB: IABDataProvider,
  "MA-L": MALDataProvider,
  "MA-M": MAMDataProvider,
  "MA-S": MASDataProvider,
} as const;
