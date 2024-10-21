import type { Accessor } from 'solid-js';
import { createSignal } from 'solid-js';

export { useCopy, writeTextToClipboard };

function writeTextToClipboard({ text }: { text: string }) {
  return navigator.clipboard.writeText(text);
}

function useCopy(getText: Accessor<string | number | undefined>) {
  const [getIsJustCopied, setIsJustCopied] = createSignal(false);

  return {
    getIsJustCopied,
    copy: () => {
      writeTextToClipboard({ text: String(getText() ?? '') });
      setIsJustCopied(true);
      setTimeout(() => setIsJustCopied(false), 2000);
    },
  };
}
