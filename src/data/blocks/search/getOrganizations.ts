import type { Block } from "../blocks";
import { getBlocksProviders } from "./getBlocksProviders";

export async function getOrganizations(config: {
  blocks: Record<Block, boolean>;
}): Promise<string[]> {
  const providers = await getBlocksProviders(config);

  const resultsSet: Set<string> = new Set();

  for (const provider of providers) {
    const subOrganizationsSet = await provider.getOrganizations();
    subOrganizationsSet.forEach((subOrganization) => {
      resultsSet.add(subOrganization);
    });
  }

  const results = Array.from(resultsSet);
  results.sort((a, b) => {
    return a
      .trim()
      .toLocaleLowerCase()
      .localeCompare(b.trim().toLocaleLowerCase());
  });

  return results;
}
