import type { CIDEntry } from "./cid";
import type { IABEntry } from "./iab";
import type { MALEntry } from "./ma-l";
import type { MAMEntry } from "./ma-m";
import type { MASEntry } from "./ma-s";

export const blocks = ["CID", "IAB", "MAL", "MAM", "MAS"] as const;

export type Block = (typeof blocks)[number];

export type BlockEntryTypeMap = {
  CID: CIDEntry;
  IAB: IABEntry;
  MAL: MALEntry;
  MAM: MAMEntry;
  MAS: MASEntry;
};

export type BlockEntryType = BlockEntryTypeMap[Block];
