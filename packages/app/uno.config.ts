import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';
import presetAnimations from 'unocss-preset-animations';

export default defineConfig({
  presets: [
    presetUno({
      dark: {
        dark: '[data-kb-theme="dark"]',
        light: '[data-kb-theme="light"]',
      },
      prefix: '',
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Inter:400,500,600,700,800,900',
        serif: 'Merriweather:400,700',
      },
    }),
    presetIcons({
      collections: {
        custom: {
          logo: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.972 11.517a.527.527 0 0 0-1.034-.105a1.38 1.38 0 0 1-1.324 1.01a1.47 1.47 0 0 1-1.4-1.009a.526.526 0 0 0-1.015 0a1.467 1.467 0 0 1-2.737.143l-.049-.204l.021-.146V9.369h2.304a2.63 2.63 0 0 0 2.631-2.632a2.68 2.68 0 0 0-2.654-2.632l-.526.022l-.13-.369A2.63 2.63 0 0 0 13.579 2c-.461 0-.915.124-1.313.358L12 2.513l-.266-.155A2.6 2.6 0 0 0 10.422 2a2.63 2.63 0 0 0-2.483 1.759l-.13.37l-.518-.024a2.68 2.68 0 0 0-2.66 2.632A2.63 2.63 0 0 0 7.264 9.37H9.61v1.887l-.007.09l-.028.08a1.33 1.33 0 0 1-1.301.996a1.63 1.63 0 0 1-1.502-1.024a.526.526 0 0 0-1.01.013a1.47 1.47 0 0 1-1.404 1.01a1.38 1.38 0 0 1-1.325-1.01a.55.55 0 0 0-.569-.382h-.008a.526.526 0 0 0-.456.526v.446a10.01 10.01 0 0 0 10 10a9.9 9.9 0 0 0 7.067-2.94A10.02 10.02 0 0 0 22 11.966zM8.316 15.685a1.053 1.053 0 1 1 2.105 0a1.053 1.053 0 0 1-2.105 0m1.58 3.684a2.105 2.105 0 0 1 4.21 0zm4.736-2.631a1.052 1.052 0 1 1 0-2.105a1.052 1.052 0 0 1 0 2.105"/></svg>',
        },
      },
    }),
    presetAnimations(),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    animation: {
      keyframes: {
        'accordion-down':
          '{ from { height: 0 } to { height: var(--kb-accordion-content-height) } }',
        'accordion-up':
          '{ from { height: var(--kb-accordion-content-height) } to { height: 0 } }',
        'collapsible-down':
          '{ from { height: 0 } to { height: var(--kb-collapsible-content-height) } }',
        'collapsible-up':
          '{ from { height: var(--kb-collapsible-content-height) } to { height: 0 } }',
        'caret-blink': '{ 0%,70%,100% { opacity: 1 } 20%,50% { opacity: 0 } }',
      },
      timingFns: {
        'accordion-down': 'ease-out',
        'accordion-up': 'ease-out',
        'collapsible-down': 'ease-out',
        'collapsible-up': 'ease-out',
        'caret-blink': 'ease-out',
      },
      durations: {
        'accordion-down': '0.2s',
        'accordion-up': '0.2s',
        'collapsible-down': '0.2s',
        'collapsible-up': '0.2s',
        'caret-blink': '1.25s',
      },
      counts: {
        'caret-blink': 'infinite',
      },
    },
  },
});
