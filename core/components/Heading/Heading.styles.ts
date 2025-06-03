import { cva } from '~/styled-system/css';

export const headingRecipe = cva({
  base: {
    fontFamily: 'heading',
    lineHeight: 'tight'
  },
  variants: {
    size: {
      xs: { fontSize: 'xs' },
      sm: { fontSize: 'sm' },
      md: { fontSize: 'md' },
      lg: { fontSize: 'lg' },
      xl: { fontSize: 'xl' },
      '2xl': { fontSize: '2xl' },
      '3xl': { fontSize: '3xl' },
      '4xl': { fontSize: '4xl' },
      '5xl': { fontSize: '5xl' }
    },
    weight: {
      normal: { fontWeight: 'normal' },
      medium: { fontWeight: 'medium' },
      semibold: { fontWeight: 'semibold' },
      bold: { fontWeight: 'bold' },
      extrabold: { fontWeight: 'extrabold' }
    }
  },
  defaultVariants: {
    size: 'md',
    weight: 'medium'
  }
});
