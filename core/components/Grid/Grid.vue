<script setup lang="ts">
import { cx, css } from '~/styled-system/css';
import { gridRecipe } from './Grid.styles';
import type { GridProps, GridAttrs } from './Grid.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'div', css: overrideCss } = defineProps<GridProps>();
const { align, justify, flow, gap, gapX, gapY, columns, rows, ...htmlAttrs } =
  useAttrs() as GridAttrs;

const gridStyles = computed(() =>
  cx(
    gridRecipe({
      align,
      justify,
      flow,
      gap,
      gapX,
      gapY,
      columns,
      rows
    }),
    css(overrideCss)
  )
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="gridStyles">
    <slot />
  </component>
</template>
