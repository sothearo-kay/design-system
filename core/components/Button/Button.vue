<script setup lang="ts">
import { cx, css } from '~/styled-system/css';
import { buttonRecipe } from './Button.styles';
import type { ButtonProps, ButtonAttrs } from './Button.types';

defineOptions({
  inheritAttrs: false
});

const { css: cssOverride } = defineProps<ButtonProps>();
const { variant, size, ...buttonAttrs } = useAttrs() as ButtonAttrs;

const buttonStyles = computed(() =>
  cx(buttonRecipe({ variant, size }), cssOverride ? css(cssOverride) : undefined)
);
</script>

<template>
  <button v-bind="buttonAttrs" :class="buttonStyles">
    <slot />
  </button>
</template>
