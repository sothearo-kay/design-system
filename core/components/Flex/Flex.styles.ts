import { cva } from 'styled-system/css';

export const flexRecipe = cva({
  base: {
    display: 'flex'
  },
  variants: {
    alignItems: {
      baseline: { alignItems: 'baseline' },
      center: { alignItems: 'center' },
      end: { alignItems: 'end' },
      'flex-end': { alignItems: 'flex-end' },
      'flex-start': { alignItems: 'flex-start' },
      start: { alignItems: 'start' },
      stretch: { alignItems: 'stretch' }
    },
    alignContent: {
      baseline: { alignContent: 'baseline' },
      center: { alignContent: 'center' },
      end: { alignContent: 'end' },
      start: { alignContent: 'start' },
      stretch: { alignContent: 'stretch' }
    },
    direction: {
      column: { flexDirection: 'column' },
      columnReverse: { flexDirection: 'column-reverse' },
      row: { flexDirection: 'row' },
      rowReverse: { flexDirection: 'row-reverse' }
    },
    gap: {
      1: { gap: '1' },
      2: { gap: '2' },
      3: { gap: '3' },
      4: { gap: '4' },
      5: { gap: '5' },
      6: { gap: '6' },
      7: { gap: '7' },
      8: { gap: '8' }
    },
    justifyContent: {
      center: { justifyContent: 'center' },
      end: { justifyContent: 'end' },
      'space-around': { justifyContent: 'space-around' },
      'space-between': { justifyContent: 'space-between' },
      'space-evenly': { justifyContent: 'space-evenly' },
      start: { justifyContent: 'start' },
      'flex-start': { justifyContent: 'flex-start' },
      'flex-end': { justifyContent: 'flex-end' }
    },
    wrap: {
      wrap: { flexWrap: 'wrap' },
      nowrap: { flexWrap: 'nowrap' },
      'wrap-reverse': { flexWrap: 'wrap-reverse' }
    }
  },
  defaultVariants: {
    gap: 1,
    wrap: 'nowrap',
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
