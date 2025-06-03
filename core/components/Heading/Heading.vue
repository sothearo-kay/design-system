<script setup lang="ts">
import { css } from '~/styled-system/css';
import { headingRecipe } from './Heading.styles';
import type { HeadingProps, HeadingAttrs } from './Heading.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'h1', color = 'inherit' } = defineProps<HeadingProps>();

const { size, weight } = useAttrs() as HeadingAttrs;

const headingStyles = computed(() => {
  const baseStyles = headingRecipe({ size, weight });
  const additionalStyles = css({
    color
  });

  return `${baseStyles} ${additionalStyles}`;
});
</script>

<template>
  <component :is="as" :class="headingStyles">
    <slot />
  </component>
</template>
