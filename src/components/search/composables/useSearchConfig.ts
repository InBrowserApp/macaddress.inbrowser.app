import { ref } from "vue";
import type { SearchConfig } from "../SearchConfig";

export function useSearchConfig() {
  const config = ref<SearchConfig>({
    blocks: {
      "MA-L": true,
      "MA-M": true,
      "MA-S": true,
      IAB: true,
      CID: true,
    },
  });

  return { config };
}
