import type { Block } from "@/data/blocks";

export function getBlockFullName(block: Block) {
  switch (block) {
    case "CID":
      return "Company ID";
    case "IAB":
      return "Individual Address Block";
    case "MA-L":
      return "MAC Address Block Large";
    case "MA-M":
      return "MAC Address Block Medium";
    case "MA-S":
      return "MAC Address Block Small";
  }
}
