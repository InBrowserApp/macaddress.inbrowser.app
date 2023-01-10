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

  for (const provider of providers) {
    results.push(...(await provider.searchAssignment(assignment)));
  }

  results.sort((a, b) => {
    return a.Assignment.localeCompare(b.Assignment);
  });

  return results;
}
