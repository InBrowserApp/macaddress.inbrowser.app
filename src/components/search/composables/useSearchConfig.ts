import { ref } from "vue";
import type { SearchConfig } from "../SearchConfig";

export function useSearchConfig() {
  const config = ref<SearchConfig>({
    blocks: {
      MAL: true,
      MAM: true,
      MAS: true,
      IAB: true,
      CID: true,
    },
  });

  return { config };
}
