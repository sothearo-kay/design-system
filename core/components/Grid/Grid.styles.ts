import { cva } from 'styled-system/css';

export const gridRecipe = cva({
  base: {
    display: 'grid',
    height: 'inherit'
  },
  variants: {
    align: {
      start: { alignItems: 'start' },
      center: { alignItems: 'center' },
      end: { alignItems: 'end' },
      stretch: { alignItems: 'stretch' },
      baseline: { alignItems: 'baseline' }
    },
    justify: {
      start: { justifyContent: 'start' },
      center: { justifyContent: 'center' },
      end: { justifyContent: 'end' },
      between: { justifyContent: 'space-between' }
    },
    flow: {
      row: { gridAutoFlow: 'row' },
      column: { gridAutoFlow: 'column' },
      dense: { gridAutoFlow: 'dense' },
      rowDense: { gridAutoFlow: 'row dense' },
      columnDense: { gridAutoFlow: 'column dense' }
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
    gapX: {
      1: { columnGap: '1' },
      2: { columnGap: '2' },
      3: { columnGap: '3' },
      4: { columnGap: '4' },
      5: { columnGap: '5' },
      6: { columnGap: '6' },
      7: { columnGap: '7' },
      8: { columnGap: '8' }
    },
    gapY: {
      1: { rowGap: '1' },
      2: { rowGap: '2' },
      3: { rowGap: '3' },
      4: { rowGap: '4' },
      5: { rowGap: '5' },
      6: { rowGap: '6' },
      7: { rowGap: '7' },
      8: { rowGap: '8' }
    },
    columns: {
      1: { gridTemplateColumns: '1fr' },
      2: { gridTemplateColumns: 'repeat(2, 1fr)' },
      3: { gridTemplateColumns: 'repeat(3, 1fr)' },
      4: { gridTemplateColumns: 'repeat(4, 1fr)' },
      5: { gridTemplateColumns: 'repeat(5, 1fr)' },
      6: { gridTemplateColumns: 'repeat(6, 1fr)' },
      7: { gridTemplateColumns: 'repeat(7, 1fr)' },
      8: { gridTemplateColumns: 'repeat(8, 1fr)' },
      9: { gridTemplateColumns: 'repeat(9, 1fr)' },
      10: { gridTemplateColumns: 'repeat(10, 1fr)' },
      11: { gridTemplateColumns: 'repeat(11, 1fr)' },
      12: { gridTemplateColumns: 'repeat(12, 1fr)' },
      auto: { gridTemplateColumns: 'auto' },
      'auto-fit': { gridTemplateColumns: 'repeat(auto-fit, minmax(min-content, 1fr))' },
      'auto-fill': { gridTemplateColumns: 'repeat(auto-fill, minmax(min-content, 1fr))' }
    },
    rows: {
      1: { gridTemplateRows: '1fr' },
      2: { gridTemplateRows: 'repeat(2, 1fr)' },
      3: { gridTemplateRows: 'repeat(3, 1fr)' },
      4: { gridTemplateRows: 'repeat(4, 1fr)' },
      5: { gridTemplateRows: 'repeat(5, 1fr)' },
      6: { gridTemplateRows: 'repeat(6, 1fr)' },
      auto: { gridTemplateRows: 'auto' }
    }
  },
  defaultVariants: {
    align: 'stretch',
    justify: 'start'
  }
});

export const gridItemRecipe = cva({
  base: {
    position: 'relative'
  },
  variants: {
    alignSelf: {
      start: { alignSelf: 'start' },
      center: { alignSelf: 'center' },
      end: { alignSelf: 'end' },
      stretch: { alignSelf: 'stretch' },
      baseline: { alignSelf: 'baseline' }
    },
    justifySelf: {
      start: { justifySelf: 'start' },
      center: { justifySelf: 'center' },
      end: { justifySelf: 'end' },
      stretch: { justifySelf: 'stretch' },
      baseline: { justifySelf: 'baseline' }
    },
    placeSelf: {
      start: { placeSelf: 'start' },
      center: { placeSelf: 'center' },
      end: { placeSelf: 'end' },
      stretch: { placeSelf: 'stretch' },
      baseline: { placeSelf: 'baseline' }
    },
    colSpan: {
      1: { gridColumn: 'span 1' },
      2: { gridColumn: 'span 2' },
      3: { gridColumn: 'span 3' },
      4: { gridColumn: 'span 4' },
      5: { gridColumn: 'span 5' },
      6: { gridColumn: 'span 6' },
      7: { gridColumn: 'span 7' },
      8: { gridColumn: 'span 8' },
      9: { gridColumn: 'span 9' },
      10: { gridColumn: 'span 10' },
      11: { gridColumn: 'span 11' },
      12: { gridColumn: 'span 12' },
      full: { gridColumn: '1 / -1' }
    },
    rowSpan: {
      1: { gridRow: 'span 1' },
      2: { gridRow: 'span 2' },
      3: { gridRow: 'span 3' },
      4: { gridRow: 'span 4' },
      5: { gridRow: 'span 5' },
      6: { gridRow: 'span 6' },
      full: { gridRow: '1 / -1' }
    }
  }
});
