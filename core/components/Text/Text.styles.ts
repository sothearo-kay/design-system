import { cva } from 'styled-system/css';

export const textRecipe = cva({
  base: {
    margin: 0,
    fontFamily: 'body',
    color: 'inherit'
  },
  variants: {
    size: {
      xs: { fontSize: 'xs', lineHeight: '1.5' },
      sm: { fontSize: 'sm', lineHeight: '1.5' },
      md: { fontSize: 'md', lineHeight: '1.5' },
      lg: { fontSize: 'lg', lineHeight: '1.5' },
      xl: { fontSize: 'xl', lineHeight: '1.5' },
      '2xl': { fontSize: '2xl', lineHeight: '1.4' },
      '3xl': { fontSize: '3xl', lineHeight: '1.4' },
      '4xl': { fontSize: '4xl', lineHeight: '1.3' },
      '5xl': { fontSize: '5xl', lineHeight: '1.3' }
    },
    weight: {
      thin: { fontWeight: 'thin' },
      light: { fontWeight: 'light' },
      normal: { fontWeight: 'normal' },
      medium: { fontWeight: 'medium' },
      semibold: { fontWeight: 'semibold' },
      bold: { fontWeight: 'bold' },
      extrabold: { fontWeight: 'extrabold' },
      black: { fontWeight: 'black' }
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
      justify: { textAlign: 'justify' }
    },
    truncate: {
      true: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    },
    wrap: {
      wrap: { whiteSpace: 'normal' },
      nowrap: { whiteSpace: 'nowrap' },
      pre: { whiteSpace: 'pre' },
      'pre-wrap': { whiteSpace: 'pre-wrap' },
      'pre-line': { whiteSpace: 'pre-line' },
      'break-spaces': { whiteSpace: 'break-spaces' }
    }
  },
  defaultVariants: {
    size: 'md',
    weight: 'normal',
    align: 'left'
  }
});
