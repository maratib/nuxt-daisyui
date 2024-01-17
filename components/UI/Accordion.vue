<template>
  <div class="join join-vertical w-full">
    <template v-for="item in data" :key="item.title">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-2" :checked="item.checked" />
        <div class="collapse-title text-xl font-medium">
          {{ item.title }}
        </div>
        <div class="collapse-content">
          <p>{{ item.desc }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>

const data = <{ title: string, desc: string, checked: boolean }[]>[

  { title: 'This is title 1', desc: 'Text 1', checked: false },
  { title: 'This is title 2', desc: 'Text 2', checked: false },
  { title: 'This is title 3', desc: 'Text 3', checked: false },
  { title: 'This is title 4', desc: 'Text 4', checked: true },
  { title: 'This is title 5', desc: 'Text 5', checked: false },
  { title: 'This is title 6', desc: 'Text 6', checked: false },
]

</script>

<style></style>