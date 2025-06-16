<script setup lang="ts">
useKeyboardShortcut('ctrl+k', () => console.log('Search'));

const { hasCopied, onCopy } = useClipboard(1500);
</script>

<template>
  <Heading as="h1">Homepage</Heading>
  <Button @click="onCopy('Hello, world!')">
    {{ hasCopied ? 'Copied!' : 'Copy Hello' }}
  </Button>
</template>
