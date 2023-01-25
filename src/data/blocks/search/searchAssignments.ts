import type { Block, BlockEntryType } from "../blocks";
import { getBlocksProviders } from "./getBlocksProviders";

export async function searchAssignments(
  assignment: string,
  config: {
    blocks: Record<Block, boolean>;
  }
): Promise<BlockEntryType[]> {
  const providers = await getBlocksProviders(config);

  const results: BlockEntryType[] = [];

  const subResultsPromises = providers.map(async (provider) => {
    const subResult = await provider.searchAssignment(assignment);
    results.push(...subResult);
    return;
  });

  await Promise.all(subResultsPromises);

  results.sort((a, b) => {
    return a.Assignment.localeCompare(b.Assignment);
  });

  return results;
}
