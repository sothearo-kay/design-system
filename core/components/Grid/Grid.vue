<script setup lang="ts">
import { gridRecipe } from './Grid.styles';
import type { GridProps, GridAttrs } from './Grid.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'div' } = defineProps<GridProps>();

const { align, justify, flow, gap, gapX, gapY, columns, rows, ...htmlAttrs } =
  useAttrs() as GridAttrs;

const gridStyles = computed(() =>
  gridRecipe({
    align,
    justify,
    flow,
    gap,
    gapX,
    gapY,
    columns,
    rows
  })
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="gridStyles">
    <slot />
  </component>
</template>
