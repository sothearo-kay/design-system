export function useClipboard(delay = 1000) {
  const hasCopied = ref(false);

  const onCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      hasCopied.value = true;
    });
  };

  watch(hasCopied, (newHasCopied, _, onCleanup) => {
    let timeoutId: NodeJS.Timeout;

    if (newHasCopied) {
      timeoutId = setTimeout(() => {
        hasCopied.value = false;
      }, delay);
    }

    onCleanup(() => {
      clearTimeout(timeoutId);
    });
  });

  return { hasCopied, onCopy };
}
