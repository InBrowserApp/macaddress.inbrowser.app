import { dataProviders } from "../dataProviders";
import { blocks, type Block, type BlockEntryType } from "../blocks";
import type { DataProvider } from "../common";

export async function getBlocksProviders(config: {
  blocks: Record<Block, boolean>;
}): Promise<DataProvider<BlockEntryType>[]> {
  const providers: DataProvider<BlockEntryType>[] = [];
  for (const block of blocks) {
    if (config.blocks[block]) {
      providers.push(dataProviders[block]);
    }
  }

  return providers;
}
