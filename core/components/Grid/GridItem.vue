<script setup lang="ts">
import { gridItemRecipe } from './Grid.styles';
import type { GridItemProps, GridItemAttrs } from './Grid.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'div' } = defineProps<GridItemProps>();

const { alignSelf, justifySelf, placeSelf, colSpan, rowSpan, ...htmlAttrs } =
  useAttrs() as GridItemAttrs;

const gridStyles = computed(() =>
  gridItemRecipe({
    alignSelf,
    justifySelf,
    placeSelf,
    colSpan,
    rowSpan
  })
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="gridStyles">
    <slot />
  </component>
</template>
