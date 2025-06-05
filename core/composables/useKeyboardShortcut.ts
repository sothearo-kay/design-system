type KeyboardEventHandler = (_event: KeyboardEvent) => void;
type ModifierKey = 'ctrl' | 'cmd' | 'alt' | 'shift' | 'meta';
type KeyCombination = string;

interface ShortcutOptions {
  target?: Ref<HTMLElement | null> | HTMLElement | null;
  preventDefault?: boolean;
  stopPropagation?: boolean;
  enabled?: Ref<boolean> | boolean;
  repeat?: boolean;
}

interface ParsedShortcut {
  modifiers: Set<ModifierKey>;
  key: string;
}

export function useKeyboardShortcut(
  shortcuts: KeyCombination | KeyCombination[],
  handler: KeyboardEventHandler,
  options: ShortcutOptions = {}
) {
  const {
    target = null,
    preventDefault = true,
    stopPropagation = false,
    enabled = true,
    repeat = false
  } = options;

  // Parse shortcuts
  const shortcutArray = Array.isArray(shortcuts) ? shortcuts : [shortcuts];
  const parsedShortcuts = shortcutArray.map(parseShortcut);

  const onKeyDown = (event: Event) => {
    // Make typescript happy
    if (!(event instanceof KeyboardEvent)) return;

    const isEnabled = unref(enabled);
    if (!isEnabled) return;

    if (!repeat && event.repeat) return;

    const matches = parsedShortcuts.some((parsed) => matchesShortcut(event, parsed));
    if (!matches) return;

    if (!target) {
      const activeElement = document.activeElement;
      const isInput =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        activeElement instanceof HTMLSelectElement ||
        (activeElement as HTMLElement)?.contentEditable === 'true';

      if (isInput) return;
    }

    if (preventDefault) event.preventDefault();
    if (stopPropagation) event.stopPropagation();

    handler(event);
  };

  onMounted(() => {
    const targetEl = unref(target) || window;
    targetEl.addEventListener('keydown', onKeyDown);
  });

  onUnmounted(() => {
    const targetEl = unref(target) || window;
    targetEl.removeEventListener('keydown', onKeyDown);
  });

  return {
    enable: () => {
      if (isRef(enabled)) enabled.value = true;
    },
    disable: () => {
      if (isRef(enabled)) enabled.value = false;
    }
  };
}

function matchesShortcut(event: KeyboardEvent, parsed: ParsedShortcut): boolean {
  const { modifiers, key } = parsed;

  // Check modifiers
  const hasCtrl = modifiers.has('ctrl');
  const hasMeta = modifiers.has('meta');
  const hasAlt = modifiers.has('alt');
  const hasShift = modifiers.has('shift');

  // On Mac, cmd is meta key; on Windows/Linux, ctrl is control key
  const isMac = navigator.userAgent.toLowerCase().includes('mac');
  const ctrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

  if (hasCtrl && !event.ctrlKey) return false;
  if (hasMeta && !event.metaKey) return false;
  if (hasAlt && !event.altKey) return false;
  if (hasShift && !event.shiftKey) return false;

  // Check for unexpected modifiers
  if (!hasCtrl && !hasMeta && ctrlOrCmd) return false;
  if (!hasAlt && event.altKey) return false;
  if (!hasShift && event.shiftKey) return false;

  // Check key
  const eventKey = event.key.toLowerCase();
  return eventKey === key.toLowerCase();
}

function parseShortcut(shortcut: string): ParsedShortcut {
  const parts = shortcut
    .toLowerCase()
    .split('+')
    .map((s) => s.trim());

  const modifiers = new Set<ModifierKey>();
  let key = '';

  for (const part of parts) {
    switch (part) {
      case 'ctrl':
      case 'control':
        modifiers.add('ctrl');
        break;
      case 'cmd':
      case 'command':
      case 'meta':
        modifiers.add('meta');
        break;
      case 'alt':
      case 'option':
        modifiers.add('alt');
        break;
      case 'shift':
        modifiers.add('shift');
        break;
      default:
        key = specialKeys[part] ?? part;
    }
  }

  return { modifiers, key };
}

const specialKeys: Record<string, string> = {
  space: ' ',
  plus: '+',
  minus: '-',
  equals: '=',
  slash: '/',
  backslash: '\\',
  comma: ',',
  period: '.',
  semicolon: ';',
  quote: `'`,
  'bracket-left': '[',
  'bracket-right': ']',
  backquote: '`',
  enter: 'Enter',
  escape: 'Escape',
  esc: 'Escape',
  tab: 'Tab',
  delete: 'Delete',
  backspace: 'Backspace',
  up: 'ArrowUp',
  down: 'ArrowDown',
  left: 'ArrowLeft',
  right: 'ArrowRight'
};
