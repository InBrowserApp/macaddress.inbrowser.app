import type { CIDEntry } from "./cid";
import type { IABEntry } from "./iab";
import type { MALEntry } from "./ma-l";
import type { MAMEntry } from "./ma-m";
import type { MASEntry } from "./ma-s";

export const blocks = ["MA-L", "MA-M", "MA-S", "IAB", "CID"] as const;

export type Block = (typeof blocks)[number];

export type BlockEntryTypeMap = {
  CID: CIDEntry;
  IAB: IABEntry;
  "MA-L": MALEntry;
  "MA-M": MAMEntry;
  "MA-S": MASEntry;
};

export type BlockEntryType = BlockEntryTypeMap[Block];
