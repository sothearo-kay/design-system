<script setup lang="ts">
import { buttonRecipe } from './Button.styles';
import type { ButtonProps, ButtonAttrs } from './Button.types';

defineOptions({
  inheritAttrs: false
});

defineProps<ButtonProps>();

const { variant, size, ...buttonAttrs } = useAttrs() as unknown as ButtonAttrs;

const buttonStyles = computed(() => buttonRecipe({ variant, size }));
</script>

<template>
  <button v-bind="buttonAttrs" :class="buttonStyles">
    <slot />
  </button>
</template>
