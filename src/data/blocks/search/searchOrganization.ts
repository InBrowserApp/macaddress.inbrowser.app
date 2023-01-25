import type { Block, BlockEntryType } from "../blocks";
import { getBlocksProviders } from "./getBlocksProviders";

export async function searchOrganization(
  organization: string,
  config: {
    blocks: Record<Block, boolean>;
  }
): Promise<BlockEntryType[]> {
  const providers = await getBlocksProviders(config);

  const results: BlockEntryType[] = [];

  for (const provider of providers) {
    results.push(...(await provider.searchOrganization(organization)));
  }

  results.sort((a, b) => {
    return a.Assignment.localeCompare(b.Assignment);
  });

  return results;
}
