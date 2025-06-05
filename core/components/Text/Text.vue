<script setup lang="ts">
import { cx, css } from '~/styled-system/css';
import { textRecipe } from './Text.styles';
import type { TextProps, TextAttrs } from './Text.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'p', color, css: cssOverride } = defineProps<TextProps>();

const { size, weight, align, truncate, wrap, ...htmlAttrs } = useAttrs() as TextAttrs;

const textStyles = computed(() =>
  cx(
    textRecipe({ size, weight, align, truncate, wrap }),
    css({
      color,
      ...cssOverride
    })
  )
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="textStyles">
    <slot />
  </component>
</template>
