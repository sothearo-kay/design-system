<script setup lang="ts">
import { cx, css } from '~/styled-system/css';
import { containerRecipe } from './Container.styles';
import type { ContainerProps, ContainerAttrs } from './Container.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'div', css: cssOverride } = defineProps<ContainerProps>();
const { size, center, padding, ...htmlAttrs } = useAttrs() as ContainerAttrs;

const containerStyles = computed(() =>
  cx(containerRecipe({ size, center, padding }), css({ ...cssOverride }))
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="containerStyles">
    <slot />
  </component>
</template>
