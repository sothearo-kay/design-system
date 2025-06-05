<script setup lang="ts">
import { cx, css } from '~/styled-system/css';
import { flexRecipe } from './Flex.styles';
import type { FlexProps, FlexAttrs } from './Flex.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'div', css: cssOverride } = defineProps<FlexProps>();
const { alignItems, alignContent, direction, gap, justifyContent, wrap, ...htmlAttrs } =
  useAttrs() as FlexAttrs;

const flexStyles = computed(() =>
  cx(
    flexRecipe({
      alignItems,
      alignContent,
      direction,
      gap,
      justifyContent,
      wrap
    }),
    css(cssOverride)
  )
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="flexStyles">
    <slot />
  </component>
</template>
