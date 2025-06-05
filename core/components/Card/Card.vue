<script setup lang="ts">
import { cx, css } from '~/styled-system/css';
import { cardRecipe } from './Card.styles';
import type { CardProps, CardAttrs } from './Card.types';

defineOptions({
  inheritAttrs: false
});

const { as = 'div', css: cssOverride } = defineProps<CardProps>();

const { variant, size, interactive, ...htmlAttrs } = useAttrs() as CardAttrs;

const cardStyles = computed(() =>
  cx(cardRecipe({ variant, size, interactive }), css({ ...cssOverride }))
);
</script>

<template>
  <component v-bind="htmlAttrs" :is="as" :class="cardStyles">
    <slot />
  </component>
</template>
