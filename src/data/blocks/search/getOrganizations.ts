import type { Block } from "../blocks";
import { getBlocksProviders } from "./getBlocksProviders";

export async function getOrganizations(config: {
  blocks: Record<Block, boolean>;
}): Promise<string[]> {
  const providers = await getBlocksProviders(config);

  const resultsSet: Set<string> = new Set();

  const subOrganizationsSetPromises = providers.map(async (provider) => {
    const subOrganizationsSet = await provider.getOrganizations();
    subOrganizationsSet.forEach((subOrganization) => {
      // FIXME
      if (subOrganization === "??????????") {
        return;
      }

      resultsSet.add(subOrganization);
    });
    return;
  });

  await Promise.all(subOrganizationsSetPromises);

  const results = Array.from(resultsSet);
  results.sort((a, b) => {
    return a
      .trim()
      .toLocaleLowerCase()
      .localeCompare(b.trim().toLocaleLowerCase());
  });

  return results;
}
