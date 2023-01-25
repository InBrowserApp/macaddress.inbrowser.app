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

const router = useRouter();
const blocks = ["MA-L", "MA-M", "MA-S", "CID", "IAB"];

const options = blocks.map((block) => ({
  label: block,
  key: block,
}));

const handleSelect = (key: string) => {
  const url = `/${key}`;
  router.push(url);
};
</script>
