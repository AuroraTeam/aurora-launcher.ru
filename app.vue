<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} - Aurora Launcher` : "Aurora Launcher";
  },
});
</script>
