<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button text size="large">
      <template #icon>
        <n-icon :component="BlockOutlined" />
      </template>
      Browse By Blocks
    </n-button>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { NButton, NIcon, NDropdown } from "naive-ui";
import BlockOutlined from "@vicons/antd/BlockOutlined";
import { useRouter } from "vue-router";
import { blocks } from "@/data/blocks";
import { getBlockFullName } from "@/utils/block";

const router = useRouter();

const options = blocks.map((block) => ({
  label: `${getBlockFullName(block)} (${block})`,
  key: block,
}));

const handleSelect = (key: string) => {
  const url = `/${key}`;
  router.push(url);
};
</script>
