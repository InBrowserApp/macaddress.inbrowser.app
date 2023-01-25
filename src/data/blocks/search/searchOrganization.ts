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

  const subResultsPromises = providers.map(async (provider) => {
    const subResult = await provider.searchOrganization(organization);
    results.push(...subResult);
    return;
  });

  await Promise.all(subResultsPromises);

  results.sort((a, b) => {
    return a.Assignment.localeCompare(b.Assignment);
  });

  return results;
}
