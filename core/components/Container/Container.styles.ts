import { cva } from 'styled-system/css';

export const containerRecipe = cva({
  base: {
    width: '100%',
    position: 'relative'
  },
  variants: {
    size: {
      sm: { maxWidth: 'container.sm' }, // 640px
      md: { maxWidth: 'container.md' }, // 768px
      lg: { maxWidth: 'container.lg' }, // 1024px
      xl: { maxWidth: 'container.xl' }, // 1280px
      '2xl': { maxWidth: 'container.2xl' }, // 1536px
      full: { maxWidth: '100%' },
      prose: { maxWidth: '65ch' }
    },
    center: {
      true: {
        marginInline: 'auto'
      }
    },
    padding: {
      none: { paddingInline: '0' },
      sm: { paddingInline: '4' },
      md: { paddingInline: '6' },
      lg: { paddingInline: '8' },
      responsive: {
        paddingInline: '4',
        sm: { paddingInline: '6' },
        lg: { paddingInline: '8' }
      }
    }
  },
  defaultVariants: {
    size: 'xl',
    center: true,
    padding: 'responsive'
  }
});
