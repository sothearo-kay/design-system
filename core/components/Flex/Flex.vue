<script setup lang="ts">
import { flexRecipe } from './Flex.styles';
import type { FlexProps, FlexAttrs } from './Flex.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'div' } = defineProps<FlexProps>();

const { alignItems, alignContent, direction, gap, justifyContent, wrap, ...htmlAttrs } =
  useAttrs() as FlexAttrs;

const flexStyles = computed(() =>
  flexRecipe({
    alignItems,
    alignContent,
    direction,
    gap,
    justifyContent,
    wrap
  })
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="flexStyles">
    <slot />
  </component>
</template>
