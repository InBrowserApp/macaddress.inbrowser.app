<template>
  <router-link to="/organizations" #="{ navigate, href }" custom>
    <n-button text size="large" tag="a" :href="href" @click="navigate">
      <template #icon>
        <n-icon :component="Organization20Regular" />
      </template>
      Browse By Organizations
    </n-button>
  </router-link>
</template>

<script lang="ts" setup>
import { NButton, NIcon } from "naive-ui";
import Organization20Regular from "@vicons/fluent/Organization20Regular";
</script>
