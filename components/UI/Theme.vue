<template>
  <ClientOnly>
    <select v-model="$colorMode.preference" class="select select-primary">
      <option disabled selected>Select Theme</option>
      <option v-for="theme in themes" :value="theme" :key="theme">
        <span class="uppercase">{{ theme }}</span>
      </option>
    </select>
  </ClientOnly>
</template>

<script lang="ts" setup>
// const colorMode = useColorMode();
const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter',
]

</script>

<style></style>